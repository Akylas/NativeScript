import type { View } from '../core/view';
import type { ViewBase } from '../core/view-base';
import type { BackstackEntry } from '../frame';
import { isNumber } from '../../utils/types';
import { Transition } from '.';
import { getRectFromProps, SharedTransition, SharedTransitionAnimationType, SharedTransitionEventData, SharedTransitionState } from './shared-transition';
import type { SharedElementTransitionContext } from './shared-transition';
import { ImageSource } from '../../image-source';
import { ContentView } from '../content-view';
import { GridLayout } from '../layouts/grid-layout';
import { Screen } from '../../platform/screen';
import { ExpandedEntry } from '../frame/fragment.transitions.android';
import { android as androidUtils } from '../../utils/native-helper';
import { _resolveAnimationCurve } from '../animation';
import lazy from '../../utils/lazy';
// import { Image } from '../image';

@NativeClass
class SnapshotViewGroup extends android.view.ViewGroup {
	constructor(context: android.content.Context) {
		super(context);
		return global.__native(this);
	}
	public onMeasure(): void {
		this.setMeasuredDimension(0, 0);
	}
	public onLayout(): void {
		//
	}
}
class ContentViewSnapshot extends ContentView {
	createNativeView() {
		return new SnapshotViewGroup(this._context);
	}
}

// Material "standard" easing (FastOutSlowIn). Overridable with the `curve` of the PageTransition or of pageEnd/pageReturn.
const defaultCurve = lazy(() => (<any>androidx).core.view.animation.PathInterpolatorCompat.create(0.4, 0, 0.2, 1) as android.view.animation.Interpolator);

// Views we gave a transition name to. They are reset when a transition ends, whatever the transition instance:
// the instance used to go back is a different one than the one used to go forward and the views of the page
// we return to (eg pager/list cells which are recycled) must not keep a stale name, or the next transition
// would pick the wrong view (wrong start/end frame).
const namedViews = new Set<ViewBase>();
// What we changed on views for the duration of a transition (scale type, outline...), to undo when it ends
const transitionRestores: Array<() => void> = [];

/**
 * Progress (0 at the bounds of the view we leave, 1 at the own bounds of the view we enter) of the shared element,
 * deduced from its current size. Following the real size (instead of running our own animator) keeps whatever we animate
 * in sync with the transition, whatever its duration, interpolator or spring.
 */
function createProgress(fromView: android.view.View, toView: android.view.View) {
	const startW = fromView.getWidth();
	const startH = fromView.getHeight();
	const dw = toView.getWidth() - startW;
	const dh = toView.getHeight() - startH;
	return (w: number, h: number) => {
		if (Math.abs(dw) < 2 && Math.abs(dh) < 2) {
			return 1;
		}
		return Math.abs(dw) >= Math.abs(dh) ? (w - startW) / dw : (h - startH) / dh;
	};
}

function getCornerRadius(view: ViewBase) {
	const v = view as any;
	// in dip. Uniform radius only: an outline can't do more
	const radius = Math.max(
		v.effectiveBorderTopLeftRadius || 0,
		v.effectiveBorderTopRightRadius || 0,
		v.effectiveBorderBottomRightRadius || 0,
		v.effectiveBorderBottomLeftRadius || 0,
		v.roundTopLeftRadius || 0,
		v.roundTopRightRadius || 0,
		v.roundBottomRightRadius || 0,
		v.roundBottomLeftRadius || 0,
	);
	return radius * Screen.mainScreen.scale;
}

/**
 * The entering view gets the size of the view we leave then animates to its own: animate its corner radius the same way
 * (eg a rounded thumbnail <-> a fullscreen image) instead of jumping to the radius of the entering view on the first frame.
 */
function animateCornerRadius(from: ViewBase, to: ViewBase, progress: (w: number, h: number) => number) {
	const nativeView = to.nativeViewProtected as android.view.View;
	if (!nativeView) {
		return;
	}
	const fromRadius = getCornerRadius(from);
	const toRadius = getCornerRadius(to);
	if (Math.abs(fromRadius - toRadius) < 1) {
		return;
	}
	const previousProvider = nativeView.getOutlineProvider();
	const previousClip = nativeView.getClipToOutline();
	nativeView.setOutlineProvider(
		new (android.view.ViewOutlineProvider as any)({
			getOutline(view: android.view.View, outline: android.graphics.Outline) {
				const w = view.getWidth();
				const h = view.getHeight();
				outline.setRoundRect(0, 0, w, h, Math.max(0, fromRadius + (toRadius - fromRadius) * progress(w, h)));
			},
		}),
	);
	nativeView.setClipToOutline(true);
	transitionRestores.push(() => {
		nativeView.setOutlineProvider(previousProvider);
		nativeView.setClipToOutline(previousClip);
		nativeView.invalidateOutline();
	});
}

/**
 * The entering view (eg a cropped thumbnail) gets the bounds of the view we leave (eg a fullscreen fit image). With its own
 * scale type it shows a cropped, "zoomed in" image on the first frames, before the animation brings it down.
 * Plain ImageViews are handled here, other image views through the handlers registered with SharedTransition.registerElementHandler.
 */
function animateScaleType(from: ViewBase, to: ViewBase, progress: (w: number, h: number) => number, isBack: boolean, imageTransform: androidx.transition.Transition) {
	const fromNative = from?.nativeViewProtected;
	const toNative = to?.nativeViewProtected;
	if (!fromNative || !toNative) {
		return;
	}
	// custom views (eg the image views of plugins with their own scale type handling) are handled by the plugins
	const context: SharedElementTransitionContext = {
		from: from as View,
		to: to as View,
		isBack,
		progress,
		onEnd: (restore) => transitionRestores.push(restore),
		skipImageTransform: () => imageTransform?.excludeTarget(toNative, true),
	};
	for (const handler of SharedTransition.getElementHandlers()) {
		try {
			if (handler.handle(context)) {
				return;
			}
		} catch (err) {
			console.error('PageTransition: shared element handler failed', err);
		}
	}
	if (fromNative instanceof android.widget.ImageView && toNative instanceof android.widget.ImageView) {
		// ChangeImageTransform animates the matrix from the scale type of the view we leave. Only fix the way back
		const fromType = fromNative.getScaleType();
		const toType = toNative.getScaleType();
		if (isBack && fromType !== toType && fromType !== android.widget.ImageView.ScaleType.MATRIX) {
			toNative.setScaleType(fromType);
			transitionRestores.push(() => toNative.setScaleType(toType));
		}
		return;
	}
}

function animateSharedElement(from: ViewBase, to: ViewBase, isBack: boolean, imageTransform: androidx.transition.Transition) {
	const fromNative = from?.nativeViewProtected as android.view.View;
	const toNative = to?.nativeViewProtected as android.view.View;
	if (!fromNative || !toNative) {
		return;
	}
	const progress = createProgress(fromNative, toNative);
	try {
		animateScaleType(from, to, progress, isBack, imageTransform);
		animateCornerRadius(from, to, progress);
	} catch (err) {
		// never break the navigation for a cosmetic animation
		console.error('PageTransition: failed to animate the shared element', err);
	}
}

function setTransitionName(view: ViewBase, value?) {
	if (!view?.sharedTransitionTag) {
		return;
	}
	try {
		androidx.core.view.ViewCompat.setTransitionName(view.nativeView, value !== undefined ? value : view.sharedTransitionTag);
		if (value === null) {
			namedViews.delete(view);
		} else {
			namedViews.add(view);
		}
	} catch (err) {
		// ignore
	}
}

function runTransitionRestores() {
	const restores = transitionRestores.splice(0, transitionRestores.length);
	for (const restore of restores) {
		try {
			restore();
		} catch (err) {
			// ignore
		}
	}
}

function resetNamedViews() {
	runTransitionRestores();
	const views = Array.from(namedViews);
	namedViews.clear();
	for (const view of views) {
		const nativeView = view.nativeViewProtected as android.view.View;
		if (!nativeView) {
			continue;
		}
		try {
			androidx.core.view.ViewCompat.setTransitionName(nativeView, null);
			nativeView.setTransitionAlpha(1);
		} catch (err) {
			// ignore
		}
	}
}

export class PageTransition extends Transition {
	constructor(
		duration?: number,
		curve?: any,
		private pageLoadedTimeout: number = 0,
	) {
		if (typeof duration !== 'number') {
			duration = 500;
		}
		// curve: same values as Animation curves (string, CubicBezierAnimationCurve, android Interpolator)
		super(duration, curve ?? defaultCurve());
	}

	/**
	 * The curve of the pageEnd/pageReturn config (depending on the direction) or the one of the transition
	 */
	private resolveCurve(state: SharedTransitionState): android.view.animation.Interpolator {
		const curve = state.activeType === SharedTransitionAnimationType.present ? state.pageEnd?.curve : state.pageReturn?.curve;
		return curve ? _resolveAnimationCurve(curve) : this.getCurve();
	}

	createAndroidAnimator(transitionType: string) {
		const state = SharedTransition.getState(this.id);
		const pageStart = state.pageStart;
		const startFrame = getRectFromProps(pageStart, {
			x: 0,
			y: 0,
			width: Screen.mainScreen.widthPixels,
			height: Screen.mainScreen.heightPixels,
		});
		const pageEnd = state.pageEnd;
		const endFrame = getRectFromProps(pageEnd);
		const pageReturn = state.pageReturn;
		const returnFrame = getRectFromProps(pageReturn);

		let customDuration = -1;
		if (state.activeType === SharedTransitionAnimationType.present && isNumber(pageEnd?.duration)) {
			customDuration = pageEnd.duration;
		} else if (isNumber(state.pageReturn?.duration)) {
			customDuration = state.pageReturn.duration;
		}

		const animationSet = new android.animation.AnimatorSet();
		animationSet.setDuration(customDuration > -1 ? customDuration : this.getDuration());

		const alphaValues = Array.create('float', 2);
		const translationXValues = Array.create('float', 2);
		const translationYValues = Array.create('float', 2);
		switch (transitionType) {
			case Transition.AndroidTransitionType.enter:
				// incoming page (to)
				alphaValues[0] = isNumber(pageStart?.opacity) ? pageStart?.opacity : 0;
				alphaValues[1] = isNumber(pageEnd?.opacity) ? pageEnd?.opacity : 1;
				translationYValues[0] = startFrame.y;
				translationYValues[1] = endFrame.y;
				translationXValues[0] = startFrame.x;
				translationXValues[1] = endFrame.x;
				break;
			case Transition.AndroidTransitionType.exit:
				// current page (from)
				alphaValues[0] = 1;
				alphaValues[1] = 0;
				translationYValues[0] = 0;
				translationYValues[1] = 0;
				break;
			case Transition.AndroidTransitionType.popEnter:
				// current page (returning to)
				alphaValues[0] = 0;
				alphaValues[1] = 1;
				break;
			case Transition.AndroidTransitionType.popExit:
				// removing page (to)
				alphaValues[0] = isNumber(pageEnd?.opacity) ? pageEnd?.opacity : 1;
				alphaValues[1] = isNumber(pageStart?.opacity) ? pageStart?.opacity : 0;
				translationYValues[0] = endFrame.y;
				translationYValues[1] = startFrame.y;
				translationXValues[0] = endFrame.x;
				translationXValues[1] = startFrame.x;
				break;
		}
		const properties = {
			alpha: alphaValues,
			translationX: translationXValues,
			translationY: translationYValues,
		};

		const interpolator = this.resolveCurve(state);
		const animations = new java.util.HashSet<any>();
		for (const prop in properties) {
			// console.log(prop, ' ', properties[prop][1]);
			const animator = android.animation.ObjectAnimator.ofFloat(null, prop, properties[prop]);
			animator.setInterpolator(interpolator);
			animations.add(animator);
		}

		animationSet.playTogether(animations);

		return animationSet;
	}

	androidFragmentTransactionCallback(fragmentTransaction: androidx.fragment.app.FragmentTransaction, currentEntry: ExpandedEntry, newEntry: BackstackEntry) {
		const fromPage = currentEntry.resolvedPage;
		const toPage = newEntry.resolvedPage;
		const newFragment: androidx.fragment.app.Fragment = newEntry.fragment;
		const state = SharedTransition.getState(this.id);
		if (!state) {
			// when navigating transition is set on the currentEntry but never cleaned up
			// which means that on a next navigation forward (without transition) and back
			// we will go here with an empty state!
			currentEntry.transition = null;
			return;
		}

		const pageStart = state.pageStart;
		const pageEnd = state.pageEnd;

		//we can't look for presented right now as the toPage might not be loaded
		// and thus some views like ListView/Pager... might not have loaded their "children"
		// presented will be handled in loaded event of toPage
		let { presenting } = SharedTransition.getSharedElements(fromPage, null);

		if (pageStart?.sharedTransitionTags) {
			const keys = Object.keys(pageStart?.sharedTransitionTags);
			presenting = presenting.filter((v) => keys.indexOf(v.sharedTransitionTag) !== -1);
		}
		// Note: we can enhance android more over time with element targeting across different screens
		// const pageStart = state.pageStart;
		// const pageEndIndependentTags = Object.keys(pageEnd?.sharedTransitionTags || {});
		// console.log('pageEndIndependentTags:', pageEndIndependentTags);
		// for (const tag of pageEndIndependentTags) {
		// 	// only consider start when there's a matching end
		// 	const pageStartIndependentProps = pageStart?.sharedTransitionTags[tag];
		// 	if (pageStartIndependentProps) {
		// 		console.log('pageStartIndependentProps:', tag, pageStartIndependentProps);
		// 	}
		// 	const pageEndIndependentProps = pageEnd?.sharedTransitionTags[tag];
		// 	let independentView = presenting.find((v) => v.sharedTransitionTag === tag);
		// 	let isPresented = false;
		// 	if (!independentView) {
		// 		independentView = presented.find((v) => v.sharedTransitionTag === tag);
		// 		if (!independentView) {
		// 			break;
		// 		}
		// 		isPresented = true;
		// 	}
		// 	if (independentView) {
		// 		console.log('independentView:', independentView);
		// 		const imageSource = renderToImageSource(independentView);
		// 		const image = new Image();
		// 		image.src = imageSource;
		// 		const { hostView } = loadViewInBackground(image);
		// 		(<any>fromPage).addChild(hostView);
		// 		independentView.opacity = 0;
		// 	}
		// }
		const frame = toPage.frame as any;
		const isBack = !!frame?.backStack?.includes?.(newEntry);
		let imageTransform: androidx.transition.Transition;
		const onPageLoaded = () => {
			// add a timeout so that Views like ListView / CollectionView can have their children instantiated
			setTimeout(() => {
				let { presented } = SharedTransition.getSharedElements(fromPage, toPage);
				if (pageEnd?.sharedTransitionTags) {
					const keys = Object.keys(pageEnd?.sharedTransitionTags);
					presented = presented.filter((v) => keys.indexOf(v.sharedTransitionTag) !== -1);
				}
				// const sharedElementTags = sharedElements.map((v) => v.sharedTransitionTag);
				presented.forEach((v) => {
					setTransitionName(v);
					animateSharedElement(
						presenting.find((p) => p.sharedTransitionTag === v.sharedTransitionTag),
						v,
						isBack,
						imageTransform,
					);
				});
				newFragment.startPostponedEnterTransition();
			}, this.pageLoadedTimeout);
		};

		fragmentTransaction.setReorderingAllowed(true);

		let customDuration = -1;
		if (state.activeType === SharedTransitionAnimationType.present && isNumber(pageEnd?.duration)) {
			customDuration = pageEnd.duration;
		} else if (isNumber(state.pageReturn?.duration)) {
			customDuration = state.pageReturn.duration;
		}

		const transitionSet = new androidx.transition.TransitionSet();
		transitionSet.setDuration(customDuration > -1 ? customDuration : this.getDuration());
		transitionSet.addTransition(new androidx.transition.ChangeBounds());
		transitionSet.addTransition(new androidx.transition.ChangeClipBounds());
		transitionSet.addTransition(new androidx.transition.ChangeTransform());
		imageTransform = new androidx.transition.ChangeImageTransform();
		transitionSet.addTransition(imageTransform);
		transitionSet.setOrdering(androidx.transition.TransitionSet.ORDERING_TOGETHER);

		transitionSet.setInterpolator(this.resolveCurve(state));

		// postpone enter until we call "loaded" on the new page
		newFragment.postponeEnterTransition();
		newFragment.setSharedElementEnterTransition(transitionSet);
		newFragment.setSharedElementReturnTransition(transitionSet);

		// Guard against duplicate shared element names being added to the same transaction
		const addedSharedElementNames = new Set();
		presenting.forEach((v) => {
			const name = v?.sharedTransitionTag;
			const nativeView = v?.nativeView;
			if (!name || !nativeView || addedSharedElementNames.has(name)) {
				// prevent duplicates or invalid items
				return;
			}
			setTransitionName(v);
			try {
				fragmentTransaction.addSharedElement(nativeView, name);
				addedSharedElementNames.add(name);
			} catch (err) {
				// ignore duplicates or issues adding shared element to avoid crashing
			}
		});
		if (toPage.isLoaded) {
			onPageLoaded();
		} else {
			toPage.once('loaded', onPageLoaded);
		}
	}
	onTransitionEnd(entry) {
		resetNamedViews();
		// as we use hide on fragments instead of remove
		// we need to reset setTransitionName after transition end
		// otherwise it will break next transitions using the same transitionName
		const fromPage = entry?.resolvedPage;
		const { presenting } = SharedTransition.getSharedElements(fromPage, null);
		presenting.forEach((v) => {
			setTransitionName(v, null);
			// androidx.transition.ChangeTransform does not restore setTransitionAlpha
			// which makes the view invisible.
			// can be a problem when the transition view on the return animation is not the same as enter
			// one example is RecyclerView to ViewPager transition
			(v.nativeViewProtected as android.view.View).setTransitionAlpha(1);
		});
	}
}

function renderToImageSource(hostView: View): ImageSource {
	const bitmap = android.graphics.Bitmap.createBitmap(hostView.android.getWidth(), hostView.android.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
	const canvas = new android.graphics.Canvas(bitmap);
	// ensure we start with a blank transparent canvas
	canvas.drawARGB(0, 0, 0, 0);
	hostView.android.draw(canvas);
	return new ImageSource(bitmap);
}

function loadViewInBackground(view: View) {
	const hiddenHost = new ContentViewSnapshot();
	const hostView = new GridLayout(); // use a host view to ensure margins are respected
	hiddenHost.content = hostView;
	hiddenHost.visibility = 'collapse';
	hostView.addChild(view);
	hiddenHost._setupAsRootView(androidUtils.getApplicationContext());
	hiddenHost.callLoaded();

	androidUtils.getCurrentActivity().addContentView(hiddenHost.android, new android.view.ViewGroup.LayoutParams(0, 0));

	return {
		hiddenHost,
		hostView,
	};
}
