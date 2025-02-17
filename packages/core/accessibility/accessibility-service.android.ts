import { Application, ApplicationEventData } from '../application';
import { Observable } from '../data/observable';
import { Trace } from '../trace';
import * as Utils from '../utils';
import { SDK_VERSION } from '../utils/constants';
import { CommonA11YServiceEnabledObservable, SharedA11YObservable } from './accessibility-service-common';

let accessibilityManager: android.view.accessibility.AccessibilityManager;
export function getAndroidAccessibilityManager(): android.view.accessibility.AccessibilityManager | null {
	if (!accessibilityManager) {
		const context = Utils.android.getApplicationContext() as android.content.Context;
		if (!context) {
			return null;
		}

		accessibilityManager = context.getSystemService(android.content.Context.ACCESSIBILITY_SERVICE) as android.view.accessibility.AccessibilityManager;
	}
	return accessibilityManager;
}

const accessibilityStateEnabledPropName = 'accessibilityStateEnabled';
const touchExplorationStateEnabledPropName = 'touchExplorationStateEnabled';

class AndroidSharedA11YObservable extends SharedA11YObservable {
	[accessibilityStateEnabledPropName]: boolean;
	[touchExplorationStateEnabledPropName]: boolean;

	// @ts-ignore todo: fix
	get accessibilityServiceEnabled(): boolean {
		return !!this[accessibilityStateEnabledPropName] && !!this[touchExplorationStateEnabledPropName];
	}

	set accessibilityServiceEnabled(v) {
		return;
	}
}

let accessibilityStateChangeListener: android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener;
let touchExplorationStateChangeListener: android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener;
let sharedA11YObservable: AndroidSharedA11YObservable;

function updateAccessibilityState(): void {
	const accessibilityManager = getAndroidAccessibilityManager();
	if (!accessibilityManager) {
		sharedA11YObservable.set(accessibilityStateEnabledPropName, false);
		sharedA11YObservable.set(touchExplorationStateEnabledPropName, false);

		return;
	}

	sharedA11YObservable.set(accessibilityStateEnabledPropName, !!accessibilityManager.isEnabled());
	sharedA11YObservable.set(touchExplorationStateEnabledPropName, !!accessibilityManager.isTouchExplorationEnabled());
}

function ensureStateListener(): SharedA11YObservable {
	if (sharedA11YObservable) {
		return sharedA11YObservable;
	}

	const accessibilityManager = getAndroidAccessibilityManager();
	sharedA11YObservable = new AndroidSharedA11YObservable();

	if (!accessibilityManager) {
		sharedA11YObservable.set(accessibilityStateEnabledPropName, false);
		sharedA11YObservable.set(touchExplorationStateEnabledPropName, false);

		return sharedA11YObservable;
	}

	accessibilityStateChangeListener = new android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener({
		onAccessibilityStateChanged(enabled) {
			updateAccessibilityState();

			if (Trace.isEnabled()) {
				Trace.write(`AccessibilityStateChangeListener state changed to: ${!!enabled}`, Trace.categories.Accessibility);
			}
		},
	});
	accessibilityManager.addAccessibilityStateChangeListener(accessibilityStateChangeListener);

	if (SDK_VERSION >= 19) {
		touchExplorationStateChangeListener = new android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener({
			onTouchExplorationStateChanged(enabled) {
				updateAccessibilityState();

				if (Trace.isEnabled()) {
					Trace.write(`TouchExplorationStateChangeListener state changed to: ${!!enabled}`, Trace.categories.Accessibility);
				}
			},
		});
		accessibilityManager.addTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
	}

	updateAccessibilityState();

	Application.on(Application.resumeEvent, updateAccessibilityState);
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

		if (sharedA11YObservable) {
			sharedA11YObservable.removeEventListener(Observable.propertyChangeEvent);
			sharedA11YObservable = null;
		}

		Application.off(Application.resumeEvent, updateAccessibilityState);
	});

	return sharedA11YObservable;
}

export function isAccessibilityServiceEnabled(): boolean {
	return ensureStateListener().accessibilityServiceEnabled;
}

export class AccessibilityServiceEnabledObservable extends CommonA11YServiceEnabledObservable {
	constructor() {
		super(ensureStateListener());
	}
}
