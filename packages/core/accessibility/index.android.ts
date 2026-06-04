import { Application, ApplicationEventData } from '../application';
import { Trace } from '../trace';
import { SDK_VERSION } from '../utils/constants';
import { resources } from '../utils/native-helper-for-android';
import type { View } from '../ui/core/view';
import { GestureTypes } from '../ui/gestures';
import { notifyAccessibilityFocusState } from './accessibility-common';
import { initAccessibilityCssHelper } from './accessibility-css-helper';
import { getAndroidAccessibilityManager } from './accessibility-service';
import { AccessibilityRole, AccessibilityState, AndroidAccessibilityEvent } from './accessibility-types';
import { getCurrentFontScale, initAccessibilityFontScale } from './font-scale.android';
import { setA11yUpdatePropertiesCallback } from '../application/helpers-common';

export * from './accessibility-common';
export * from './accessibility-types';
export * from './font-scale';
export { getAndroidAccessibilityManager };


export function getFontScale(): number {
	return getCurrentFontScale();
}

let clickableRolesMap = new Set<AccessibilityRole>();

let lastFocusedView: WeakRef<View>;
function accessibilityEventHelper(view: View, eventType: number) {
	if (!isAccessibilityServiceEnabled()) {
		if (Trace.isEnabled()) {
			Trace.write(`accessibilityEventHelper: Service not active`, Trace.categories.Accessibility);
		}
		return;
	}

	const androidView = view?.nativeViewProtected as android.view.View;
	if (!androidView) {
		if (Trace.isEnabled()) {
			Trace.write(`accessibilityEventHelper: no nativeView`, Trace.categories.Accessibility);
		}
		return;
	}
	const eventName = accessibilityEventTypeMap.get(eventType);
	if (!eventName) {
		Trace.write(`accessibilityEventHelper: unknown eventType: ${eventType}`, Trace.categories.Accessibility, Trace.messageType.error);

		return;
	}

	switch (eventType) {
		case 1 /* android.view.accessibility.AccessibilityEvent.TYPE_VIEW_CLICKED */: {
			/**
			 * Android API >= 26 handles accessibility tap-events by converting them to TYPE_VIEW_CLICKED
			 * These aren't triggered for custom tap events in NativeScript.
			 */
			if (SDK_VERSION >= 26) {
				// Find all tap gestures and trigger them.
				for (const tapGesture of view.getGestureObservers(GestureTypes.tap) ?? []) {
					tapGesture.callback({
						android: view.android,
						eventName: 'tap',
						ios: null,
						object: view,
						type: GestureTypes.tap,
						view: view,
					});
				}
			}

			return;
		}
		case 32768 /* android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED */: {
			const lastView = lastFocusedView?.get();
			if (lastView && view !== lastView) {
				const lastAndroidView = lastView.nativeViewProtected as android.view.View;
				if (lastAndroidView) {
					lastAndroidView.clearFocus();
					lastFocusedView = null;

					notifyAccessibilityFocusState(lastView, false, true);
				}
			}

			lastFocusedView = new WeakRef(view);

			notifyAccessibilityFocusState(view, true, false);

			return;
		}
		case 65536 /* android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED */: {
			const lastView = lastFocusedView?.get();
			if (lastView && view === lastView) {
				lastFocusedView = null;
				androidView.clearFocus();
			}

			notifyAccessibilityFocusState(view, false, true);

			return;
		}
	}
}

let TNSAccessibilityDelegate: android.view.View.androidviewViewAccessibilityDelegate;

const androidViewToTNSView = new WeakMap<android.view.View, WeakRef<View>>();
let accessibilityEventMap: Map<AndroidAccessibilityEvent, number>;
let accessibilityEventTypeMap: Map<number, AndroidAccessibilityEvent>;

function ensureNativeClasses() {
	if (TNSAccessibilityDelegate) {
		return;
	}

	// WORKAROUND: Typing refers to android.view.View.androidviewViewAccessibilityDelegate but it is called android.view.View.AccessibilityDelegate at runtime
	const AccessibilityDelegate: typeof android.view.View.androidviewViewAccessibilityDelegate = android.view.View['AccessibilityDelegate'];

	const RoleTypeMap = new Map<AccessibilityRole, () => string>([
		[AccessibilityRole.Button, () => android.widget.Button.class.getName()],
		[AccessibilityRole.Search, () => android.widget.EditText.class.getName()],
		[AccessibilityRole.Image, () => android.widget.ImageView.class.getName()],
		[AccessibilityRole.ImageButton, () => android.widget.ImageButton.class.getName()],
		[AccessibilityRole.KeyboardKey, () => android.inputmethodservice.Keyboard.Key.class.getName()],
		[AccessibilityRole.StaticText, () => android.widget.TextView.class.getName()],
		[AccessibilityRole.Adjustable, () => android.widget.SeekBar.class.getName()],
		[AccessibilityRole.Checkbox, () => android.widget.CheckBox.class.getName()],
		[AccessibilityRole.RadioButton, () => android.widget.RadioButton.class.getName()],
		[AccessibilityRole.SpinButton, () => android.widget.Spinner.class.getName()],
		[AccessibilityRole.Switch, () => android.widget.Switch.class.getName()],
		[AccessibilityRole.ProgressBar, () => android.widget.ProgressBar.class.getName()],
	]);
	const RoleTypeMapCached = new Map<AccessibilityRole, string>();

	clickableRolesMap = new Set<AccessibilityRole>([AccessibilityRole.Button, AccessibilityRole.ImageButton]);

	const ignoreRoleTypesForTrace = new Set([AccessibilityRole.Header, AccessibilityRole.Link, AccessibilityRole.None, AccessibilityRole.Summary]);

	@NativeClass()
	class TNSAccessibilityDelegateImpl extends AccessibilityDelegate {
		constructor() {
			super();

			return global.__native(this);
		}

		private getTnsView(androidView: android.view.View) {
			const view = androidViewToTNSView.get(androidView)?.get();
			if (!view) {
				androidViewToTNSView.delete(androidView);

				return null;
			}

			return view;
		}

		public onInitializeAccessibilityNodeInfo(host: android.view.View, info: android.view.accessibility.AccessibilityNodeInfo) {
			super.onInitializeAccessibilityNodeInfo(host, info);

			const view = this.getTnsView(host);
			if (!view) {
				if (Trace.isEnabled()) {
					Trace.write(`onInitializeAccessibilityNodeInfo ${host} ${info} no tns-view`, Trace.categories.Accessibility);
				}

				return;
			}

			// Set resource id that can be used with test frameworks without polluting the content description.
			const id = host.getTag(resources.getId(`:id/nativescript_accessibility_id`));
			if (id != null) {
				info.setViewIdResourceName(id);
			}

			const accessibilityRole = view.accessibilityRole;
			if (accessibilityRole) {
				//we cache value while not loading all classes on start
				let androidClassName = RoleTypeMapCached.get(accessibilityRole);
				if (!androidClassName) {
					androidClassName = RoleTypeMap.get(accessibilityRole)?.();
					RoleTypeMapCached.set(accessibilityRole, androidClassName);
				}
				if (androidClassName) {
					info.setClassName(androidClassName);

					if (Trace.isEnabled()) {
						const oldClassName = info.getClassName() || (SDK_VERSION >= 28 && host.getAccessibilityClassName()) || null;
						Trace.write(`${view}.accessibilityRole = "${accessibilityRole}" is mapped to "${androidClassName}" (was ${oldClassName}). ${info.getClassName()}`, Trace.categories.Accessibility);
					}
				} else if (!ignoreRoleTypesForTrace.has(accessibilityRole)) {
					if (Trace.isEnabled()) {
						Trace.write(`${view}.accessibilityRole = "${accessibilityRole}" is unknown`, Trace.categories.Accessibility);
					}
				}

				if (clickableRolesMap.has(accessibilityRole)) {
					if (Trace.isEnabled()) {
						Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set clickable role=${accessibilityRole}`, Trace.categories.Accessibility);
					}

					info.setClickable(true);
				}

				if (SDK_VERSION >= 28) {
					if (accessibilityRole === AccessibilityRole.Header) {
						if (Trace.isEnabled()) {
							Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set heading role=${accessibilityRole}`, Trace.categories.Accessibility);
						}

						info.setHeading(true);
					} else if (host.isAccessibilityHeading()) {
						if (Trace.isEnabled()) {
							Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set heading from host`, Trace.categories.Accessibility);
						}

						info.setHeading(true);
					} else {
						if (Trace.isEnabled()) {
							Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set not heading`, Trace.categories.Accessibility);
						}

						info.setHeading(false);
					}
				}

				switch (accessibilityRole) {
					case AccessibilityRole.Switch:
					case AccessibilityRole.RadioButton:
					case AccessibilityRole.Checkbox: {
						if (Trace.isEnabled()) {
							Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set checkable and check=${view.accessibilityState === AccessibilityState.Checked}`, Trace.categories.Accessibility);
						}

						info.setCheckable(true);
						info.setChecked(view.accessibilityState === AccessibilityState.Checked);
						break;
					}
					default: {
						if (Trace.isEnabled()) {
							Trace.write(`onInitializeAccessibilityNodeInfo ${view} - set enabled=${view.accessibilityState !== AccessibilityState.Disabled} and selected=${view.accessibilityState === AccessibilityState.Selected}`, Trace.categories.Accessibility);
						}

						info.setEnabled(view.accessibilityState !== AccessibilityState.Disabled);
						info.setSelected(view.accessibilityState === AccessibilityState.Selected);
						break;
					}
				}
			}

			if (view.accessible) {
				info.setFocusable(true);
			}
		}

		public sendAccessibilityEvent(host: android.view.ViewGroup, eventType: number) {
			super.sendAccessibilityEvent(host, eventType);
			const view = this.getTnsView(host);
			if (!view) {
				console.log(`skip - ${host} - ${AndroidAccessibilityEvent[eventType]}`);

				return;
			}

			try {
				accessibilityEventHelper(view, eventType);
			} catch (err) {
				console.error(err);
			}
		}
	}

	TNSAccessibilityDelegate = new TNSAccessibilityDelegateImpl();

	accessibilityEventMap = new Map<AndroidAccessibilityEvent, number>([
		/**
		 * Invalid selection/focus position.
		 */
		[AndroidAccessibilityEvent.INVALID_POSITION, android.view.accessibility.AccessibilityEvent.INVALID_POSITION],
		/**
		 * Maximum length of the text fields.
		 */
		[AndroidAccessibilityEvent.MAX_TEXT_LENGTH, android.view.accessibility.AccessibilityEvent.MAX_TEXT_LENGTH],
		/**
		 * Represents the event of clicking on a android.view.View like android.widget.Button, android.widget.CompoundButton, etc.
		 */
		[AndroidAccessibilityEvent.VIEW_CLICKED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_CLICKED],
		/**
		 * Represents the event of long clicking on a android.view.View like android.widget.Button, android.widget.CompoundButton, etc.
		 */
		[AndroidAccessibilityEvent.VIEW_LONG_CLICKED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_LONG_CLICKED],
		/**
		 * Represents the event of selecting an item usually in the context of an android.widget.AdapterView.
		 */
		[AndroidAccessibilityEvent.VIEW_SELECTED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_SELECTED],
		/**
		 * Represents the event of setting input focus of a android.view.View.
		 */
		[AndroidAccessibilityEvent.VIEW_FOCUSED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_FOCUSED],
		/**
		 * Represents the event of changing the text of an android.widget.EditText.
		 */
		[AndroidAccessibilityEvent.VIEW_TEXT_CHANGED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED],
		/**
		 * Represents the event of opening a android.widget.PopupWindow, android.view.Menu, android.app.Dialog, etc.
		 */
		[AndroidAccessibilityEvent.WINDOW_STATE_CHANGED, android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED],
		/**
		 * Represents the event showing a android.app.Notification.
		 */
		[AndroidAccessibilityEvent.NOTIFICATION_STATE_CHANGED, android.view.accessibility.AccessibilityEvent.TYPE_NOTIFICATION_STATE_CHANGED],
		/**
		 * Represents the event of a hover enter over a android.view.View.
		 */
		[AndroidAccessibilityEvent.VIEW_HOVER_ENTER, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_HOVER_ENTER],
		/**
		 * Represents the event of a hover exit over a android.view.View.
		 */
		[AndroidAccessibilityEvent.VIEW_HOVER_EXIT, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_HOVER_EXIT],
		/**
		 * Represents the event of starting a touch exploration gesture.
		 */
		[AndroidAccessibilityEvent.TOUCH_EXPLORATION_GESTURE_START, android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_START],
		/**
		 * Represents the event of ending a touch exploration gesture.
		 */
		[AndroidAccessibilityEvent.TOUCH_EXPLORATION_GESTURE_END, android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_END],
		/**
		 * Represents the event of changing the content of a window and more specifically the sub-tree rooted at the event's source.
		 */
		[AndroidAccessibilityEvent.WINDOW_CONTENT_CHANGED, android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED],
		/**
		 * Represents the event of scrolling a view.
		 */
		[AndroidAccessibilityEvent.VIEW_SCROLLED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_SCROLLED],
		/**
		 * Represents the event of changing the selection in an android.widget.EditText.
		 */
		[AndroidAccessibilityEvent.VIEW_TEXT_SELECTION_CHANGED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_SELECTION_CHANGED],
		/**
		 * Represents the event of an application making an announcement.
		 */
		[AndroidAccessibilityEvent.ANNOUNCEMENT, android.view.accessibility.AccessibilityEvent.TYPE_ANNOUNCEMENT],
		/**
		 * Represents the event of gaining accessibility focus.
		 */
		[AndroidAccessibilityEvent.VIEW_ACCESSIBILITY_FOCUSED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED],
		/**
		 * Represents the event of clearing accessibility focus.
		 */
		[AndroidAccessibilityEvent.VIEW_ACCESSIBILITY_FOCUS_CLEARED, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED],
		/**
		 * Represents the event of traversing the text of a view at a given movement granularity.
		 */
		[AndroidAccessibilityEvent.VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY, android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY],
		/**
		 * Represents the event of beginning gesture detection.
		 */
		[AndroidAccessibilityEvent.GESTURE_DETECTION_START, android.view.accessibility.AccessibilityEvent.TYPE_GESTURE_DETECTION_START],
		/**
		 * Represents the event of ending gesture detection.
		 */
		[AndroidAccessibilityEvent.GESTURE_DETECTION_END, android.view.accessibility.AccessibilityEvent.TYPE_GESTURE_DETECTION_END],
		/**
		 * Represents the event of the user starting to touch the screen.
		 */
		[AndroidAccessibilityEvent.TOUCH_INTERACTION_START, android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_INTERACTION_START],
		/**
		 * Represents the event of the user ending to touch the screen.
		 */
		[AndroidAccessibilityEvent.TOUCH_INTERACTION_END, android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_INTERACTION_END],
		/**
		 * Mask for AccessibilityEvent all types.
		 */
		[AndroidAccessibilityEvent.ALL_MASK, android.view.accessibility.AccessibilityEvent.TYPES_ALL_MASK],
	]);

	accessibilityEventTypeMap = new Map([...accessibilityEventMap].map(([k, v]) => [v, k]));
}

let accessibilityStateChangeListener: androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener;
let touchExplorationStateChangeListener: androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener;

function updateAccessibilityServiceState() {
	const accessibilityManager = getAndroidAccessibilityManager();
	if (!accessibilityManager) {
		return;
	}

	accessibilityServiceEnabled = !!accessibilityManager.isEnabled() && !!accessibilityManager.isTouchExplorationEnabled();
}

let accessibilityServiceEnabled: boolean;
export function isAccessibilityServiceEnabled(): boolean {
	if (accessibilityServiceEnabled !== undefined) {
		return accessibilityServiceEnabled;
	}

	const accessibilityManager = getAndroidAccessibilityManager();
	
	accessibilityStateChangeListener = new android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener({
		onAccessibilityStateChanged(enabled) {
			updateAccessibilityServiceState();

			if (Trace.isEnabled()) {
				Trace.write(`AccessibilityStateChangeListener state changed to: ${!!enabled}`, Trace.categories.Accessibility);
			}
		},
	});
	accessibilityManager.addAccessibilityStateChangeListener(accessibilityStateChangeListener);


	if (SDK_VERSION >= 19) {
		touchExplorationStateChangeListener = new android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener({
			onTouchExplorationStateChanged(enabled) {
				updateAccessibilityServiceState();

				if (Trace.isEnabled()) {
					Trace.write(`TouchExplorationStateChangeListener state changed to: ${!!enabled}`, Trace.categories.Accessibility);
				}
			},
		});
		accessibilityManager.addTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
	}

	updateAccessibilityServiceState();

	Application.on(Application.exitEvent, (args: ApplicationEventData) => {
		const activity = args.android as android.app.Activity;
		if (activity && !activity.isFinishing()) {
			return;
		}

		const accessibilityManager = getAndroidAccessibilityManager();
		if (accessibilityManager) {
			if (accessibilityStateChangeListener) {
				accessibilityManager.removeAccessibilityStateChangeListener(accessibilityStateChangeListener);
			}

			if (touchExplorationStateChangeListener) {
				accessibilityManager.removeTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
			}
		}

		accessibilityStateChangeListener = null;
		touchExplorationStateChangeListener = null;

		Application.off(Application.resumeEvent, updateAccessibilityServiceState);
	});

	Application.on(Application.resumeEvent, updateAccessibilityServiceState);

	return accessibilityServiceEnabled;
}

export function setupAccessibleView(view: View): void {
	updateAccessibilityProperties(view);
}

let updateAccessibilityPropertiesMicroTask;
let pendingViews = new Set<View>();
export function updateAccessibilityProperties(view: View) {
	if (!view.nativeViewProtected) {
		return;
	}

	pendingViews.add(view);
	if (updateAccessibilityPropertiesMicroTask) return;

	updateAccessibilityPropertiesMicroTask = true;
	Promise.resolve().then(() => {
		updateAccessibilityPropertiesMicroTask = false;
		let _pendingViews = Array.from(pendingViews);
		pendingViews = new Set();
		for (const view of _pendingViews) {
			if (!view.nativeViewProtected) continue;
			setAccessibilityDelegate(view);
			if (!view._hasDefaultAccessibilityContentDescription || view._androidContentDescriptionNeedsUpdate === true) {
				updateContentDescription(view);
			}
		}
		_pendingViews = [];
	});
}
setA11yUpdatePropertiesCallback(updateAccessibilityProperties);

export function sendAccessibilityEvent(view: View, eventType: AndroidAccessibilityEvent, text?: string): void {
	if (!isAccessibilityServiceEnabled()) {
		return;
	}

	const androidView = view.nativeViewProtected as android.view.View;
	if (!androidView) {
		if (Trace.isEnabled()) {
			Trace.write(`sendAccessibilityEvent(${view}, ${eventType}, ${text}): no nativeView`, Trace.categories.Accessibility);
		}
		return;
	}

	if (!eventType) {
		if (Trace.isEnabled()) {
			Trace.write(`sendAccessibilityEvent(${view}, ${eventType}, ${text}): no eventName provided`, Trace.categories.Accessibility);
		}

		return;
	}

	if (!isAccessibilityServiceEnabled()) {
		if (Trace.isEnabled()) {
			Trace.write(`sendAccessibilityEvent(${view}, ${eventType}, ${text}): TalkBack not enabled`, Trace.categories.Accessibility);
		}

		return;
	}

	const eventInt = accessibilityEventMap.get(eventType);
	if (!text) {
		return androidView.sendAccessibilityEvent(eventInt);
	}

	const accessibilityEvent = android.view.accessibility.AccessibilityEvent.obtain(eventType);
	accessibilityEvent.setSource(androidView);

	accessibilityEvent.getText().clear();

	if (Trace.isEnabled()) {
		Trace.write(`sendAccessibilityEvent(${view}: send event with text: '${JSON.stringify(text)}'`, Trace.categories.Accessibility);
	}

	if (text) {
		accessibilityEvent.getText().add(text);
	}

	getAndroidAccessibilityManager().sendAccessibilityEvent(accessibilityEvent);
}

let started = false;
function setAccessibilityDelegate(view: View): void {
	if (!view.nativeViewProtected) {
		return;
	}
	if (!started) {
		started = true;
		initAccessibilityCssHelper();
		initAccessibilityFontScale();
	}

	ensureNativeClasses();

	const androidView = view.nativeViewProtected as android.view.View;
	if (!androidView?.setAccessibilityDelegate) {
		return;
	}

	// TODO: is that really a good idea? is that a memory issue?
	androidViewToTNSView.set(androidView, new WeakRef(view));

	if (androidView.getAccessibilityDelegate?.() === TNSAccessibilityDelegate) {
		return;
	}

	androidView.setAccessibilityDelegate(TNSAccessibilityDelegate);
}

export function updateContentDescription(view: any /* View */, forceUpdate?: boolean): string | null {
	if (!view.nativeViewProtected) {
		return;
	}

	return applyContentDescription(view, forceUpdate);
}

export function applyContentDescription(view: any /* View */, forceUpdate?: boolean) {
	let androidView = view.nativeViewProtected as android.view.View;
	if (!androidView || (androidView instanceof android.widget.TextView && !view._androidContentDescriptionUpdated)) {
		return null;
	}

	if (androidView instanceof androidx.appcompat.widget.Toolbar) {
		androidView = org.nativescript.widgets.ViewHelper.getChildAppCompatTextView(androidView) || androidView;
	}

	const cls = `applyContentDescription(${view})`;

	const titleValue = view['title'] as string;
	const textValue = view['text'] as string;

	if (!forceUpdate && view._androidContentDescriptionUpdated === false && textValue === view['_lastText'] && titleValue === view['_lastTitle']) {
		// prevent updating this too much
		return androidView.getContentDescription();
	}

	const contentDescriptionBuilder = new Array<string>();

	// Workaround: TalkBack won't read the checked state for fake Switch.
	if (view.accessibilityRole === AccessibilityRole.Switch) {
		const androidSwitch = new android.widget.Switch(view._context);
		if (view.accessibilityState === AccessibilityState.Checked) {
			contentDescriptionBuilder.push(androidSwitch.getTextOn());
		} else {
			contentDescriptionBuilder.push(androidSwitch.getTextOff());
		}
	}

	if (view.accessibilityLabel) {
		if (Trace.isEnabled()) {
			Trace.write(`${cls} - have accessibilityLabel`, Trace.categories.Accessibility);
		}

		contentDescriptionBuilder.push(`${view.accessibilityLabel}`);
	}

	if (view.accessibilityValue) {
		if (Trace.isEnabled()) {
			Trace.write(`${cls} - have accessibilityValue`, Trace.categories.Accessibility);
		}

		contentDescriptionBuilder.push(`${view.accessibilityValue}`);
	} else if (textValue) {
		if (textValue !== view.accessibilityLabel) {
			if (Trace.isEnabled()) {
				Trace.write(`${cls} - don't have accessibilityValue - use 'text' value`, Trace.categories.Accessibility);
			}

			contentDescriptionBuilder.push(`${textValue}`);
		}
	} else if (titleValue) {
		if (titleValue !== view.accessibilityLabel) {
			if (Trace.isEnabled()) {
				Trace.write(`${cls} - don't have accessibilityValue - use 'title' value`, Trace.categories.Accessibility);
			}

			contentDescriptionBuilder.push(`${titleValue}`);
		}
	}

	if (view.accessibilityHint) {
		if (Trace.isEnabled()) {
			Trace.write(`${cls} - have accessibilityHint`, Trace.categories.Accessibility);
		}

		contentDescriptionBuilder.push(`${view.accessibilityHint}`);
	}

	const contentDescription = contentDescriptionBuilder.join('. ').trim().replace(/^\.$/, '');

	if (contentDescription) {
		if (Trace.isEnabled()) {
			Trace.write(`${cls} - set to "${contentDescription}"`, Trace.categories.Accessibility);
		}

		androidView.setContentDescription(contentDescription);
	} else {
		if (Trace.isEnabled()) {
			Trace.write(`${cls} - remove value`, Trace.categories.Accessibility);
		}

		androidView.setContentDescription(null);
	}

	view['_lastTitle'] = titleValue;
	view['_lastText'] = textValue;
	view._androidContentDescriptionUpdated = false;

	return contentDescription;
}