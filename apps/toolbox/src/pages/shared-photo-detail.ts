import { Frame, GestureEventData, GestureTypes, Image, NavigatedData, Observable, Page, PanGestureEventData, PinchGestureEventData, SwipeDirection, SwipeGestureEventData } from '@nativescript/core';
import { PHOTO_COUNT, photoSource, photoTag, photoTransition, showPhotoOnFirstPage } from './shared-photo';

class SharedPhotoDetailModel extends Observable {
	id: number;
	info: string;
	private scale = 1;
	private startScale = 1;
	private tx = 0;
	private ty = 0;
	private startTx = 0;
	private startTy = 0;

	constructor(
		private image: Image,
		id: number,
	) {
		super();
		this.show(id);
		// The zoom is kept as a transform on the view itself (like a zoomable drawee keeping a matrix on the view)
		image.on(GestureTypes.pinch, (args: PinchGestureEventData) => {
			if (args.state === 1) {
				this.startScale = this.scale;
			}
			this.scale = Math.max(1, Math.min(5, this.startScale * args.scale));
			this.apply();
		});
		image.on(GestureTypes.pan, (args: PanGestureEventData) => {
			if (this.scale <= 1) {
				return;
			}
			if (args.state === 1) {
				this.startTx = this.tx;
				this.startTy = this.ty;
			}
			this.tx = this.startTx + args.deltaX;
			this.ty = this.startTy + args.deltaY;
			this.apply();
		});
		image.on(GestureTypes.doubleTap, () => this.resetZoom());
		image.on(GestureTypes.swipe, (args: SwipeGestureEventData) => {
			if (this.scale > 1) {
				return;
			}
			if (args.direction === SwipeDirection.left) {
				this.show(Math.min(PHOTO_COUNT, this.id + 1));
			} else if (args.direction === SwipeDirection.right) {
				this.show(Math.max(1, this.id - 1));
			}
		});
	}

	show(id: number) {
		this.id = id;
		this.image.src = photoSource(id);
		this.image.sharedTransitionTag = photoTag(id);
		this.resetZoom();
		this.set('info', `photo ${id} / ${PHOTO_COUNT}  tag=${photoTag(id)}`);
	}

	resetZoom() {
		this.scale = 1;
		this.tx = 0;
		this.ty = 0;
		this.apply();
	}

	private apply() {
		this.image.scaleX = this.image.scaleY = this.scale;
		this.image.translateX = this.tx;
		this.image.translateY = this.ty;
	}

	// scripted version of: swipe to the next photo, pinch zoom, press back
	runAuto(zoom = true) {
		setTimeout(() => this.show(Math.min(PHOTO_COUNT, this.id + 1)), 1500);
		if (zoom) {
			setTimeout(() => {
				this.scale = 2;
				this.tx = 30;
				this.ty = 40;
				this.apply();
			}, 2200);
		}
		setTimeout(() => this.back(), 3000);
	}

	back() {
		const frame = Frame.topmost();
		// same flow as svelte-native goBack({ transition }): the transition is assigned on the backstack entry
		const entry = frame.backStack[frame.backStack.length - 1];
		if (!entry) {
			return;
		}
		// the zoom is NOT reset on purpose: the fork should cope with it
		showPhotoOnFirstPage(this.id);
		entry.transition = photoTransition(photoTag(this.id));
		frame.goBack(entry);
	}
}

export function navigatingTo(args: NavigatedData) {
	if (args.isBack) {
		return;
	}
	const page = args.object as Page;
	const { id, hiddenBar, auto } = args.context as { id: number; hiddenBar: boolean; auto?: boolean | 'nozoom' };
	page.actionBarHidden = !!hiddenBar;
	const model = new SharedPhotoDetailModel(page.getViewById<Image>('photo'), id);
	page.bindingContext = model;
	if (auto) {
		model.runAuto(auto !== 'nozoom');
	}
}
