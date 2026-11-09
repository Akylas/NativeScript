import { EventData, Frame, Image, Observable, Page, PageTransition, ScrollView, Screen, SharedTransition, StackLayout } from '@nativescript/core';

export const PHOTO_COUNT = 5;
export const photoSource = (id: number) => `~/assets/shared-photo/p${id}.png`;
export const photoTag = (id: number) => `photo_${id}`;

export function photoTransition(tag: string) {
	return SharedTransition.custom(new PageTransition(300, undefined, 10), {
		pageStart: { sharedTransitionTags: { [tag]: {} } },
	});
}

let stripPage: Page;
/**
 * Like a pager following the photo shown in fullscreen: bring the photo back on screen on the first page
 * (not animated) so that the shared element has a visible target when going back.
 */
export function showPhotoOnFirstPage(id: number) {
	const strip = stripPage?.getViewById<ScrollView>('strip');
	const photo = stripPage?.getViewById<StackLayout>('photos')?.getChildAt(id - 1);
	if (!strip || !photo) {
		return;
	}
	const target = Math.max(0, Math.min((id - 1) * 166 + 8 - (Screen.mainScreen.widthDIPs - 150) / 2, strip.scrollableWidth));
	strip.scrollToHorizontalOffset(target, false);
}

class SharedPhotoModel extends Observable {
	hiddenBar = false;
	interactive = false;
	info = '';
	constructor(private page: Page) {
		super();
		this.refresh();
	}
	get barLabel() {
		return this.hiddenBar ? 'B: actionBarHidden' : 'B: native bar';
	}
	get edgeLabel() {
		return this.interactive ? 'interactive dismiss: on' : 'interactive dismiss: off';
	}
	refresh() {
		this.notifyPropertyChange('barLabel', this.barLabel);
		this.notifyPropertyChange('edgeLabel', this.edgeLabel);
	}
	toggleBar() {
		this.hiddenBar = !this.hiddenBar;
		this.refresh();
	}
	toggleInteractive() {
		this.interactive = !this.interactive;
		this.refresh();
	}
	autoTest() {
		this.open(2, true);
	}
	autoTestNoZoom() {
		this.open(2, 'nozoom');
	}
	open(id: number, auto: boolean | 'nozoom' = false) {
		const tag = photoTag(id);
		const transition = SharedTransition.custom(new PageTransition(300, undefined, 10), {
			...(this.interactive ? { interactive: { dismiss: { finishThreshold: 0.5 } } } : {}),
			pageStart: { sharedTransitionTags: { [tag]: {} } },
		});
		Frame.topmost().navigate({
			moduleName: 'pages/shared-photo-detail',
			context: { id, hiddenBar: this.hiddenBar, auto },
			transition,
		});
	}
}

let logging = false;
function enableLogging() {
	if (logging) {
		return;
	}
	logging = true;
	for (const name of [SharedTransition.startedEvent, SharedTransition.finishedEvent, SharedTransition.interactiveUpdateEvent, SharedTransition.interactiveCancelledEvent]) {
		SharedTransition.events().on(name, (e) => console.log(`[shared-photo] ${name}`, JSON.stringify(e.data)));
	}
}

export function navigatingTo(args: EventData) {
	enableLogging();
	const page = args.object as Page;
	stripPage = page;
	const model = new SharedPhotoModel(page);
	page.bindingContext = model;
	const strip = page.getViewById<StackLayout>('photos');
	if (strip.getChildrenCount() > 0) {
		return;
	}
	for (let id = 1; id <= PHOTO_COUNT; id++) {
		const image = new Image();
		image.src = photoSource(id);
		image.width = 150;
		image.height = 200;
		image.margin = 8;
		image.borderRadius = 20;
		image.stretch = 'aspectFill';
		image.sharedTransitionTag = photoTag(id);
		image.on('tap', () => model.open(id));
		strip.addChild(image);
	}
}
