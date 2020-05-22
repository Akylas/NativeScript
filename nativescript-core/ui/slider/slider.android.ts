import { Background } from "../styling/background";
import {
    SliderBase, valueProperty, minValueProperty, maxValueProperty,
    colorProperty, backgroundColorProperty, backgroundInternalProperty, Color
} from "./slider-common";

export * from "./slider-common";

let SeekBar: typeof android.widget.SeekBar;

export class Slider extends SliderBase {
    _supressNativeValue: boolean;
    nativeViewProtected: android.widget.SeekBar;

    public createNativeView() {
        if (!SeekBar) {
            SeekBar = android.widget.SeekBar;
        }

        return new SeekBar(this._context);
    }

    public initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        const listener = new android.widget.SeekBar.OnSeekBarChangeListener({
            onStartTrackingTouch: this.onStartTrackingTouch.bind(this),
            onStopTrackingTouch: this.onStopTrackingTouch.bind(this),
            onProgressChanged: this.onProgressChanged.bind(this),
        });
        nativeView.setOnSeekBarChangeListener(listener);
        (nativeView as any).listener = listener;
    }

    protected onProgressChanged(seekBar: android.widget.SeekBar, progress: number, fromUser: boolean): void {
        if (!this._supressNativeValue) {
            const newValue = progress + this.minValue;
            valueProperty.nativeValueChange(this, newValue);
        }
    }

    protected onStartTrackingTouch(seekBar: android.widget.SeekBar): void {
        //
    }

    protected onStopTrackingTouch(seekBar: android.widget.SeekBar): void {
        //
    }

    public disposeNativeView() {
        (this.nativeViewProtected as any).listener = null;
        super.disposeNativeView();
    }

    public resetNativeView(): void {
        super.resetNativeView();
        const nativeView = this.nativeViewProtected;
        nativeView.setMax(100);
        nativeView.setProgress(0);
        nativeView.setKeyProgressIncrement(1);
    }

    /**
     * There is no minValue in Android. We simulate this by subtracting the minValue from the native value and maxValue.
     * We need this method to call native setMax and setProgress methods when minValue property is changed,
     * without handling the native value changed callback.
     */
    private setNativeValuesSilently() {
        this._supressNativeValue = true;
        const nativeView = this.nativeViewProtected;
        try {
            nativeView.setMax(this.maxValue - this.minValue);
            nativeView.setProgress(this.value - this.minValue);
        } finally {
            this._supressNativeValue = false;
        }
    }

    [valueProperty.setNative](value: number) {
        this.setNativeValuesSilently();
    }

    [minValueProperty.setNative](value: number) {
        this.setNativeValuesSilently();
    }

    [maxValueProperty.getDefault](): number {
        return 100;
    }
    [maxValueProperty.setNative](value: number) {
        this.setNativeValuesSilently();
    }

    [colorProperty.getDefault](): number {
        return -1;
    }
    [colorProperty.setNative](value: number | Color) {
        if (value instanceof Color) {
            this.nativeViewProtected.getThumb().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        } else {
            this.nativeViewProtected.getThumb().clearColorFilter();
        }
    }

    [backgroundColorProperty.getDefault](): number {
        return -1;
    }
    [backgroundColorProperty.setNative](value: number | Color) {
        if (value instanceof Color) {
            this.nativeViewProtected.getProgressDrawable().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        } else {
            this.nativeViewProtected.getProgressDrawable().clearColorFilter();
        }
    }

    [backgroundInternalProperty.getDefault](): Background {
        return null;
    }
    [backgroundInternalProperty.setNative](value: Background) {
        //
    }
}
