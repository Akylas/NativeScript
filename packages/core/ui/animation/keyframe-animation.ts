import { View } from '../core/view';
import { Color } from '../../color';

import { CoreTypes } from '../../core-types';

import { Trace } from '../../trace';

// Types.
import { unsetValue } from '../core/properties';
import { Animation } from '.';
import { scaleXProperty, scaleYProperty, translateXProperty, translateYProperty, rotateProperty, rotateXProperty, rotateYProperty } from '../styling/style-properties';
import { AnimationNonAnimatableProperties, getPropertyFromKey } from './animation-common';

export interface Keyframes {
	name: string;
	keyframes: Array<UnparsedKeyframe>;
	tag?: string | number;
	scopedTag?: string;
	mediaQueryString?: string;
}

export class UnparsedKeyframe {
	values: Array<any>;
	declarations: Array<KeyframeDeclaration>;
}

export class KeyframeDeclaration {
	public property: string;
	public value: any;
}

export class KeyframeInfo {
	public duration: number;
	public declarations: Array<KeyframeDeclaration>;
	public curve?: any = CoreTypes.AnimationCurve.ease;
}

export class KeyframeAnimationInfo {
	public keyframes: Array<KeyframeInfo>;
	public name?: string = '';
	public duration?: number = 0.3;
	public delay?: number = 0;
	public iterations?: number = 1;
	public curve?: any = 'ease';
	public isForwards?: boolean = false;
	public isReverse?: boolean = false;
}

interface Keyframe {
	backgroundColor?: Color;
	scale?: { x: number; y: number };
	translate?: { x: number; y: number };
	rotate?: { x: number; y: number; z: number } | number;
	opacity?: number;
	width?: CoreTypes.PercentLengthType;
	height?: CoreTypes.PercentLengthType;
	valueSource?: 'keyframe' | 'animation';
	duration?: number;
	curve?: any;
}

export class KeyframeAnimation {
	public animations: Array<Keyframe>;
	public delay = 0;
	public iterations = 1;

	private _resolve;
	private _isPlaying: boolean;
	private _isForwards: boolean;
	private _nativeAnimations: Array<Animation>;
	private _target: View;

	public static keyframeAnimationFromInfo(info: KeyframeAnimationInfo): KeyframeAnimation {
		if (!info?.keyframes?.length) {
			if (Trace.isEnabled()) {
				Trace.write(`No keyframes found for animation '${info.name}'.`, Trace.categories.Animation, Trace.messageType.warn);
			}
			return null;
		}

		const length = info.keyframes.length;
		const animations = new Array<Keyframe>();
		let startDuration = 0;

		if (info.isReverse) {
			for (let index = length - 1; index >= 0; index--) {
				const keyframe = info.keyframes[index];
				startDuration = KeyframeAnimation.parseKeyframe(info, keyframe, animations, startDuration);
			}
		} else {
			for (let index = 0; index < length; index++) {
				const keyframe = info.keyframes[index];
				startDuration = KeyframeAnimation.parseKeyframe(info, keyframe, animations, startDuration);
			}
			for (let index = length - 1; index > 0; index--) {
				const a1 = animations[index];
				const a2 = animations[index - 1];
				if (a2['curve'] !== undefined) {
					a1['curve'] = a2['curve'];
					a2['curve'] = undefined;
				}
			}
		}

		animations.map((a) => (a['curve'] ? a : Object.assign(a, { curve: info.curve })));

		const animation: KeyframeAnimation = new KeyframeAnimation();
		animation.delay = info.delay;
		animation.iterations = info.iterations;
		animation.animations = animations;
		animation._isForwards = info.isForwards;

		return animation;
	}

	private static parseKeyframe(info: KeyframeAnimationInfo, keyframe: KeyframeInfo, animations: Array<Keyframe>, startDuration: number): number {
		const animation: Keyframe = {};
		for (const declaration of keyframe.declarations) {
			animation[declaration.property] = declaration.value;
		}

		let duration = keyframe.duration;
		if (duration === 0) {
			duration = 0.01;
		} else {
			duration = info.duration * duration - startDuration;
			startDuration += duration;
		}
		animation.duration = info.isReverse ? info.duration - duration : duration;
		animation.curve = keyframe.curve;
		animation.valueSource = 'keyframe';
		animations.push(animation);

		return startDuration;
	}

	public get isPlaying(): boolean {
		return this._isPlaying;
	}

	public cancel() {
		if (!this.isPlaying) {
			Trace.write('Keyframe animation is already playing.', Trace.categories.Animation, Trace.messageType.warn);
			return;
		}

		this._isPlaying = false;
		for (let i = this._nativeAnimations.length - 1; i >= 0; i--) {
			const animation = this._nativeAnimations[i];
			if (animation.isPlaying) {
				animation.cancel();
			}
		}
		if (this._nativeAnimations.length > 0) {
			const animation = this._nativeAnimations[0];
			this._resetAnimationValues(this._target, animation);
		}
		this._resetAnimations();
	}

	public play(view: View): Promise<void> {
		if (this._isPlaying) {
			Trace.write('Keyframe animation is already playing.', Trace.categories.Animation, Trace.messageType.warn);

			return new Promise<void>((resolve) => {
				resolve();
			});
		}

		const animationFinishedPromise = new Promise<void>((resolve) => {
			this._resolve = resolve;
		});

		this._isPlaying = true;
		this._nativeAnimations = new Array<Animation>();
		this._target = view;

		if (this.delay !== 0) {
			setTimeout(() => this.animate(view, 0, this.iterations), this.delay);
		} else {
			this.animate(view, 0, this.iterations);
		}

		return animationFinishedPromise;
	}

	private animate(view: View, index: number, iterations: number) {
		if (!this._isPlaying) {
			return;
		}
		if (index === 0) {
			const animation = this.animations[0];
			Object.keys(animation).forEach((key) => {
				if (AnimationNonAnimatableProperties.indexOf(key) !== -1) {
					return;
				}
				if ('scale' === key) {
					view.style[scaleXProperty.keyframe] = animation.scale.x;
					view.style[scaleYProperty.keyframe] = animation.scale.y;
				} else if ('translate' === key) {
					view.style[translateXProperty.keyframe] = animation.translate.x;
					view.style[translateYProperty.keyframe] = animation.translate.y;
				} else if ('rotate' === key) {
					if (typeof animation.rotate == 'object') {
						view.style[rotateXProperty.keyframe] = animation.rotate.x;
						view.style[rotateYProperty.keyframe] = animation.rotate.y;
						view.style[rotateProperty.keyframe] = animation.rotate.z;
					} else {
						view.style[rotateProperty.keyframe] = animation.rotate;
					}
				} else {
					const property = getPropertyFromKey(key, view);
					if (property?.keyframe) {
						view.style[property.keyframe] = animation[key];
					}
				}
			});

			setTimeout(() => this.animate(view, 1, iterations), 1);
		} else if (index < 0 || index >= this.animations.length) {
			iterations -= 1;
			if (iterations > 0) {
				this.animate(view, 0, iterations);
			} else {
				if (this._isForwards === false) {
					const animation = this.animations[this.animations.length - 1];
					this._resetAnimationValues(view, animation);
				}
				this._resolveAnimationFinishedPromise();
			}
		} else {
			let animation: Animation;
			const cachedAnimation = this._nativeAnimations[index - 1];

			if (cachedAnimation) {
				animation = cachedAnimation;
			} else {
				const animationDef = { ...this.animations[index], target: view };
				animation = new Animation([animationDef]);
				this._nativeAnimations.push(animation);
			}

			const isLastIteration = iterations - 1 <= 0;

			// Catch the animation cancel to prevent unhandled promise rejection warnings
			animation
				.play(isLastIteration)
				.then(() => {
					this.animate(view, index + 1, iterations);
				})
				.catch((error: any) => {
					if (Trace.isEnabled()) {
						Trace.write(typeof error === 'string' ? error : error.message, Trace.categories.Animation, Trace.messageType.warn);
					}
				});
		}
	}

	public _resolveAnimationFinishedPromise() {
		this._nativeAnimations = new Array<Animation>();
		this._isPlaying = false;
		this._target = null;
		this._resolve();
	}

	public _resetAnimations() {
		this._nativeAnimations = new Array<Animation>();
		this._isPlaying = false;
		this._target = null;
	}

	private _resetAnimationValues(view: View, animation: Animation | Keyframe) {
		Object.keys(animation).forEach((key) => {
			if (AnimationNonAnimatableProperties.indexOf(key) !== -1) {
				return;
			}
			if ('scale' === key) {
				view.style[scaleXProperty.keyframe] = unsetValue;
				view.style[scaleYProperty.keyframe] = unsetValue;
			} else if ('translate' === key) {
				view.style[translateXProperty.keyframe] = unsetValue;
				view.style[translateYProperty.keyframe] = unsetValue;
			} else if ('rotate' === key) {
				view.style[rotateXProperty.keyframe] = unsetValue;
				view.style[rotateYProperty.keyframe] = unsetValue;
				view.style[rotateProperty.keyframe] = unsetValue;
			} else {
				const property = getPropertyFromKey(key, view);
				if (property?.keyframe) {
					view.style[property.keyframe] = unsetValue;
				}
			}
		});
	}
}
