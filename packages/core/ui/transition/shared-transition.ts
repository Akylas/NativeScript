import type { Transition, TransitionNavigationType, SharedTransitionTagPropertiesToMatch } from '.';
import { Observable } from '../../data/observable';
import { Screen } from '../../platform';
import { isNumber } from '../../utils/types';
import { CORE_ANIMATION_DEFAULTS } from '../../utils/animation-helpers';
import { querySelectorAll, ViewBase } from '../core/view-base';
import type { View } from '../core/view';
import type { PanGestureEventData } from '../gestures';

// always increment when adding new transitions to be able to track their state
export enum SharedTransitionAnimationType {
	present,
	dismiss,
}
type SharedTransitionEventAction = 'present' | 'dismiss' | 'interactiveStart' | 'interactiveFinish';
export type SharedTransitionEventDataPayload = {
	id: number;
	type: TransitionNavigationType;
	action?: SharedTransitionEventAction;
	percent?: number;
};
export type SharedTransitionEventData = {
	eventName: string;
	data: SharedTransitionEventDataPayload;
};
export type SharedRect = { x?: number; y?: number; width?: number; height?: number };
export type SharedProperties = SharedRect & {
	opacity?: number;
	scale?: { x?: number; y?: number };
	/**
	 * (iOS only) Page-level corner radius to animate alongside the transition.
	 * Useful for sheet-style modals where the top corners are rounded at the
	 * starting offscreen position and flatten as the page reaches fullscreen
	 * (and vice versa for dismiss). Top-left + top-right corners are masked.
	 */
	cornerRadius?: number;
};
/**
 * Properties which can be set on individual Shared Elements
 */
export type SharedTransitionTagProperties = SharedProperties & {
	/**
	 * The visual stacking order where 0 is at the bottom.
	 * Shared elements are stacked one on top of the other during each transition.
	 * By default they are not ordered in any particular fashion.
	 */
	zIndex?: number;
	/**
	 * Collection of properties to match and animate on each shared element.
	 *
	 * Defaults to: 'backgroundColor', 'cornerRadius', 'borderWidth', 'borderColor'
	 *
	 * Tip: Using an empty array, [], for view or layer will avoid copying any properties if desired.
	 */
	propertiesToMatch?: SharedTransitionTagPropertiesToMatch;
	/**
	 *
	 */
	callback?: (view: View, action: SharedTransitionEventAction) => Promise<void>;
};
export type SharedSpringProperties = {
	tension?: number;
	friction?: number;
	mass?: number;
	delay?: number;
	velocity?: number;
	animateOptions?: any /* ios only: UIViewAnimationOptions */;
};
type SharedTransitionPageProperties = SharedProperties & {
	/**
	 * (iOS Only) Allow "independent" elements found only on one of the screens to take part in the animation.
	 * Note: This feature will be brought to Android in a future release.
	 */
	sharedTransitionTags?: { [key: string]: SharedTransitionTagProperties };
	/**
	 * Spring animation settings.
	 * Defaults to 140 tension with 10 friction.
	 */
	spring?: SharedSpringProperties;
};
type SharedTransitionPageWithDurationProperties = SharedTransitionPageProperties & {
	/**
	 * Linear duration in milliseconds
	 * Note: When this is defined, it will override spring options and use only linear animation.
	 */
	duration?: number | undefined | null;
	/**
	 * (Android only) Easing used for the transition: 'linear', 'ease', 'easeIn', 'easeOut', 'easeInOut',
	 * a CubicBezierAnimationCurve or an android Interpolator.
	 * Defaults to the curve of the PageTransition (FastOutSlowIn when none is given).
	 */
	curve?: any;
};
export interface SharedTransitionInteractiveOptions {
	/**
	 * When the pan exceeds this percentage and you let go, finish the transition.
	 * Default 0.5
	 */
	finishThreshold?: number;
	/**
	 * You can create your own percent formula used for determing the interactive value.
	 * By default, we handle this via a formula like this for an interactive page back transition:
	 * - return eventData.deltaX / (eventData.ios.view.bounds.size.width / 2);
	 * @param eventData PanGestureEventData
	 * @returns The percentage value to be used as the finish/cancel threshold
	 */
	percentFormula?: (eventData: PanGestureEventData) => number;
	/**
	 * (iOS only) Apple Music–style "morph" interactive dismiss.
	 *
	 * Instead of fading the destination and animating shared snapshots, the
	 * entire destination view scales + translates with the user's finger.
	 *  - If released past `finishThreshold`, the view morphs into the matching
	 *    source element's frame and the transition completes.
	 *  - If released before the threshold, the view springs back to its
	 *    fullscreen position.
	 *
	 * Set to `true` for the default tuning. Pass an object to customize.
	 */
	morph?:
		| boolean
		| {
				/** Smallest scale applied at maximum drag distance. Default 0.5. */
				minScale?: number;
		  };
	/**
	 * (iOS only) Drop shadow rendered behind the destination view during the
	 * interactive dismiss — gives the view a sense of depth/elevation as it
	 * morphs back toward the source (Apple Music–style).
	 * Note: This feature will be brought to Android in a future release.
	 *
	 * - `true` applies sensible defaults
	 *   (color black, opacity 0.3, radius 30, offset (0, 8)).
	 * - Pass an object to customize any field.
	 * - Omit / `false` to skip.
	 */
	shadow?: boolean | SharedTransitionInteractiveDismissShadow;
}
export interface SharedTransitionInteractiveDismissShadow {
	/** Hex / named color string or `Color` instance. Default `'#000'`. */
	color?: string | { ios?: any /* UIColor */ };
	/** 0–1. Default `0.3`. */
	opacity?: number;
	/** Blur radius in points. Default `30`. */
	radius?: number;
	/** Offset in points. Default `{ x: 0, y: 8 }`. */
	offset?: { x?: number; y?: number };
}
export interface SharedTransitionConfig {
	/**
	 * Interactive transition settings. (iOS only at the moment)
	 */
	interactive?: {
		/**
		 * Whether you want to allow interactive dismissal.
		 * Defaults to using 'pan' gesture for dismissal however you can customize your own.
		 */
		dismiss?: SharedTransitionInteractiveOptions;
	};
	/**
	 * View settings applied to the incoming page to start your transition with.
	 */
	pageStart?: SharedTransitionPageProperties;
	/**
	 * View settings applied to the incoming page to end your transition with.
	 */
	pageEnd?: SharedTransitionPageWithDurationProperties;
	/**
	 * View settings applied to the outgoing page in your transition.
	 */
	pageOut?: SharedTransitionPageWithDurationProperties;
	/**
	 * View settings to return to the original page with.
	 */
	pageReturn?: SharedTransitionPageWithDurationProperties & {
		/**
		 * In some cases you may want the returning animation to start with the original opacity,
		 * instead of beginning where it ended up on pageEnd.
		 * Note: you can try enabling this property in cases where your return animation doesn't appear correct.
		 */
		useStartOpacity?: boolean;
	};
}
export interface SharedTransitionState extends SharedTransitionConfig {
	/**
	 * (Internally used) Preconfigured transition or your own custom configured one.
	 */
	instance?: Transition;
	/**
	 * Page which will start the transition.
	 */
	page?: ViewBase;
	activeType?: SharedTransitionAnimationType;
	toPage?: ViewBase;
	/**
	 * Whether interactive transition has began.
	 */
	interactiveBegan?: boolean;
	/**
	 * Whether interactive transition was cancelled.
	 */
	interactiveCancelled?: boolean;
}
class SharedTransitionObservable extends Observable {
	// @ts-ignore
	on(eventNames: string, callback: (data: SharedTransitionEventData) => void, thisArg?: any) {
		super.on(eventNames, <any>callback, thisArg);
	}
}
let sharedTransitionEvents: SharedTransitionObservable;
let currentStack: Array<SharedTransitionState>;
// Detached NS subtrees (e.g. a TabView's iosBottomAccessory) that aren't reachable
// from a page via the NS view tree, but whose tagged views should still participate
// in shared transitions. Registered by their owning component; queried alongside
// the source page in getSharedElements. Held weakly so an unregistered-but-forgotten
// root doesn't pin its subtree; dead refs are pruned on query.
let externalRoots: Array<WeakRef<ViewBase>>;
/**
 * Passed to a {@link SharedElementHandler} when a shared element is about to be transitioned.
 */
export interface SharedElementTransitionContext {
	/**
	 * The view of the page we leave: where the shared element starts from.
	 */
	from: View;
	/**
	 * The view of the page we enter: the one the transition moves/resizes from the bounds of `from` to its own bounds.
	 */
	to: View;
	/**
	 * Whether the shared element goes back to the page we came from.
	 */
	isBack: boolean;
	/**
	 * Progress of the shared element: 0 at the bounds of `from`, 1 at the own bounds of `to`. It can go out of [0, 1] with springs.
	 * It is deduced from the current native size of `to` (in native pixels), so whatever is driven by it stays in sync with the transition
	 * (duration, interpolator, spring...) without any animator of its own.
	 * Call it from native draw/layout callbacks with the current native width/height of the view.
	 */
	progress(width: number, height: number): number;
	/**
	 * Register something to run when the transition ends (or is replaced), to restore anything changed on the views.
	 */
	onEnd(restore: () => void): void;
	/**
	 * Android: stop the platform from animating the image matrix of `to` (androidx ChangeImageTransform). Needed when the view
	 * draws its image itself (eg through its own scale type) and animates it from the handler: both would stack up otherwise.
	 */
	skipImageTransform(): void;
}

/**
 * Lets a plugin teach the shared element transitions how to animate its custom views (eg an image view which keeps its scale type
 * in its own native hierarchy, so that the platform image transforms don't apply).
 * Currently used on Android only.
 */
export interface SharedElementHandler {
	/**
	 * Called for each shared element pair, before the transition starts, when the views are laid out.
	 * @returns true when the pair was handled: the default animation of the scale type is then skipped.
	 */
	handle(context: SharedElementTransitionContext): boolean | void;
}

/**
 * Shared Element Transitions (preview)
 * Allows you to auto animate between shared elements on two different screesn to create smooth navigational experiences.
 * View components can define sharedTransitionTag="name" alone with a transition through this API.
 */
export class SharedTransition {
	/**
	 * Configure a custom transition with presentation/dismissal options.
	 * @param transition The custom Transition instance.
	 * @param options
	 * @returns a configured SharedTransition instance for use with navigational APIs.
	 */
	static custom(transition: Transition, options?: SharedTransitionConfig): { instance: Transition } {
		SharedTransition.updateState(transition.id, {
			...(options || {}),
			instance: transition,
			activeType: SharedTransitionAnimationType.present,
		});
		const pageEnd = options?.pageEnd;
		if (isNumber(pageEnd?.duration)) {
			// Android uses milliseconds/iOS uses seconds
			// users pass in milliseconds
			transition.setDuration(__APPLE__ ? pageEnd?.duration / 1000 : pageEnd?.duration);
		}
		return { instance: transition };
	}
	private static elementHandlers: SharedElementHandler[] = [];
	/**
	 * Register a handler which animates shared elements made of custom views.
	 * Plugins supporting several versions of core should feature detect it:
	 * `SharedTransition['registerElementHandler']?.(handler)`
	 * @returns a function to unregister the handler
	 */
	static registerElementHandler(handler: SharedElementHandler): () => void {
		if (SharedTransition.elementHandlers.indexOf(handler) === -1) {
			SharedTransition.elementHandlers.push(handler);
		}
		return () => SharedTransition.unregisterElementHandler(handler);
	}
	/**
	 * Unregister a handler previously registered with {@link registerElementHandler}.
	 */
	static unregisterElementHandler(handler: SharedElementHandler) {
		const index = SharedTransition.elementHandlers.indexOf(handler);
		if (index !== -1) {
			SharedTransition.elementHandlers.splice(index, 1);
		}
	}
	/**
	 * The registered element handlers, in registration order.
	 */
	static getElementHandlers(): readonly SharedElementHandler[] {
		return SharedTransition.elementHandlers;
	}
	/**
	 * Whether a transition is in progress or not.
	 * Note: used internally however exposed in case custom state ordering is needed.
	 * Updated when transitions start/end/cancel.
	 */
	static inProgress: boolean;
	/**
	 * Listen to various shared element transition events.
	 * @returns Observable
	 */
	static events(): SharedTransitionObservable {
		if (!sharedTransitionEvents) {
			sharedTransitionEvents = new SharedTransitionObservable();
		}
		return sharedTransitionEvents;
	}
	/**
	 * When the transition starts.
	 */
	static startedEvent = 'SharedTransitionStartedEvent';
	/**
	 * When the transition finishes.
	 */
	static finishedEvent = 'SharedTransitionFinishedEvent';
	/**
	 * When the interactive transition cancels.
	 */
	static interactiveCancelledEvent = 'SharedTransitionInteractiveCancelledEvent';
	/**
	 * When the interactive transition updates with the percent value.
	 */
	static interactiveUpdateEvent = 'SharedTransitionInteractiveUpdateEvent';

	/**
	 * Notify a Shared Transition event.
	 * @param id transition instance id
	 * @param eventName Shared Transition event name
	 * @param type TransitionNavigationType
	 * @param action SharedTransitionEventAction
	 */
	static notifyEvent(eventName: string, data: SharedTransitionEventDataPayload) {
		switch (eventName) {
			case SharedTransition.startedEvent:
			case SharedTransition.interactiveUpdateEvent:
				SharedTransition.inProgress = true;
				break;
			default:
				SharedTransition.inProgress = false;
				break;
		}
		SharedTransition.events().notify<SharedTransitionEventData>({
			eventName,
			data,
		});
	}

	/**
	 * Enable to see various console logging output of Shared Element Transition behavior.
	 */
	static DEBUG = false;
	/**
	 * Update transition state.
	 * @param id Transition instance id
	 * @param state SharedTransitionState
	 */
	static updateState(id: number, state: SharedTransitionState) {
		if (!currentStack) {
			currentStack = [];
		}
		const existingTransition = SharedTransition.getState(id);
		if (existingTransition) {
			// updating existing
			for (const key in state) {
				existingTransition[key] = state[key];
				// console.log(' ... updating state: ', key, state[key])
			}
		} else {
			currentStack.push(state);
		}
	}
	/**
	 * Get current state for any transition.
	 * @param id Transition instance id
	 */
	static getState(id: number) {
		return currentStack?.find((t) => t.instance?.id === id);
	}
	/**
	 * Finish transition state.
	 * @param id Transition instance id
	 */
	static finishState(id: number) {
		const index = currentStack?.findIndex((t) => t.instance?.id === id);
		if (index > -1) {
			currentStack.splice(index, 1);
		}
	}
	/**
	 * Register an NS view subtree that should be searched for sharedTransitionTag
	 * elements in addition to the source page. Use this for views that are attached
	 * to the native UI but aren't reachable from the page via the NS view tree —
	 * for example, a TabView's `iosBottomAccessory`. The root and any of its
	 * descendants with a `sharedTransitionTag` will then participate in transitions
	 * originating from any page.
	 *
	 * Registration is idempotent. Pair with `unregisterExternalRoot` on teardown
	 * to avoid leaking detached views into future transitions.
	 */
	static registerExternalRoot(root: ViewBase): void {
		if (!root) return;
		if (!externalRoots) {
			externalRoots = [];
		}
		if (!externalRoots.some((ref) => ref.deref() === root)) {
			externalRoots.push(new WeakRef(root));
		}
	}
	/**
	 * Remove a previously registered external root. No-op if the root wasn't
	 * registered.
	 */
	static unregisterExternalRoot(root: ViewBase): void {
		if (!root || !externalRoots) return;
		externalRoots = externalRoots.filter((ref) => {
			const view = ref.deref();
			return view && view !== root;
		});
	}
	/**
	 * Gather view collections based on sharedTransitionTag details.
	 * @param fromPage Page moving away from
	 * @param toPage Page moving to
	 * @returns Collections of views pertaining to shared elements or particular pages
	 */
	static getSharedElements(
		fromPage: ViewBase,
		toPage: ViewBase,
	): {
		sharedElements: Array<View>;
		presented: Array<View>;
		presenting: Array<View>;
	} {
		let presentedSharedElements: Array<View> = [];
		let presentingSharedElements: Array<View> = [];
		// 1. Presented view: gather all sharedTransitionTag views
		if (toPage) {
			if (toPage.hasListeners('sharedElementTo')) {
				toPage.notify({ eventName: 'sharedElementTo', views: presentedSharedElements });
			} else {
				presentedSharedElements = <Array<View>>querySelectorAll(toPage, 'sharedTransitionTag').filter((v) => !v.sharedTransitionIgnore && typeof v.sharedTransitionTag === 'string');
			}
		}
		const presentedTags = presentedSharedElements.map((v) => v.sharedTransitionTag);

		// console.log(
		// 	'presented sharedTransitionTags:',
		// 	presentedSharedElements.map((v) => v.sharedTransitionTag)
		// );

		// 2. Presenting view: gather all sharedTransitionTag views — and also any
		// tagged views inside external roots (detached subtrees registered by
		// components like TabView's iosBottomAccessory). External roots persist
		// across page navigations, so their views only join the transition when
		// their tag *also* exists on the destination — they participate as
		// matched shared elements, never as orphans that would fade out.
		if (fromPage) {
			if (fromPage.hasListeners('sharedElementFrom')) {
				fromPage.notify({ eventName: 'sharedElementFrom', views: presentingSharedElements });
			} else {
				presentingSharedElements = <Array<View>>querySelectorAll(fromPage, 'sharedTransitionTag').filter((v) => !v.sharedTransitionIgnore && typeof v.sharedTransitionTag === 'string');
			}
		}
		if (externalRoots?.length) {
			externalRoots = externalRoots.filter((ref) => ref.deref());
			for (const ref of externalRoots) {
				const root = ref.deref();
				if (!root) continue;
				const extra = <Array<View>>querySelectorAll(root, 'sharedTransitionTag').filter((v) => !v.sharedTransitionIgnore && typeof v.sharedTransitionTag === 'string');
				for (const v of extra) {
					if (!presentedTags.includes(v.sharedTransitionTag)) continue;
					if (presentingSharedElements.includes(v)) continue;
					presentingSharedElements.push(v);
				}
			}
		}
		// console.log(
		// 	'presenting sharedTransitionTags:',
		// 	presentingSharedElements.map((v) => v.sharedTransitionTag)
		// );

		// 3. only handle sharedTransitionTag on presenting which match presented
		return {
			sharedElements: presentingSharedElements.filter((v) => presentedTags.includes(v.sharedTransitionTag)),
			presented: presentedSharedElements,
			presenting: presentingSharedElements,
		};
	}
}

/**
 * Get dimensional rectangle (x,y,width,height) from properties with fallbacks for any undefined values.
 * @param props combination of properties conformed to SharedTransitionPageProperties
 * @param defaults fallback properties when props doesn't contain a value for it
 * @returns { x,y,width,height }
 */
export function getRectFromProps(props: SharedTransitionPageProperties, defaults?: SharedRect): SharedRect {
	defaults = {
		x: 0,
		y: 0,
		width: getPlatformWidth(),
		height: getPlatformHeight(),
		...(defaults || {}),
	};
	return {
		x: isNumber(props?.x) ? props?.x : defaults.x,
		y: isNumber(props?.y) ? props?.y : defaults.y,
		width: isNumber(props?.width) ? props?.width : defaults.width,
		height: isNumber(props?.height) ? props?.height : defaults.height,
	};
}

/**
 * Get spring properties with default fallbacks for any undefined values.
 * @param props various spring related properties conforming to SharedSpringProperties
 * @returns
 */
export function getSpringFromProps(props: SharedSpringProperties) {
	return {
		tension: isNumber(props?.tension) ? props?.tension : CORE_ANIMATION_DEFAULTS.spring.tension,
		friction: isNumber(props?.friction) ? props?.friction : CORE_ANIMATION_DEFAULTS.spring.friction,
		mass: isNumber(props?.mass) ? props?.mass : CORE_ANIMATION_DEFAULTS.spring.mass,
		velocity: isNumber(props?.velocity) ? props?.velocity : CORE_ANIMATION_DEFAULTS.spring.velocity,
		delay: isNumber(props?.delay) ? props?.delay : 0,
	};
}

/**
 * Page starting defaults for provided type.
 * @param type TransitionNavigationType
 * @returns { x,y,width,height }
 */
export function getPageStartDefaultsForType(type: TransitionNavigationType) {
	return {
		x: type === 'page' ? getPlatformWidth() : 0,
		y: type === 'page' ? 0 : getPlatformHeight(),
		width: getPlatformWidth(),
		height: getPlatformHeight(),
	};
}

function getPlatformWidth() {
	return __ANDROID__ ? Screen.mainScreen.widthPixels : Screen.mainScreen.widthDIPs;
}

function getPlatformHeight() {
	return __ANDROID__ ? Screen.mainScreen.heightPixels : Screen.mainScreen.heightDIPs;
}
