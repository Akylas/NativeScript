import {
    DatePickerBase, yearProperty, monthProperty, dayProperty,
    dateProperty, maxDateProperty, minDateProperty
} from "./date-picker-common";

export * from "./date-picker-common";

export class DatePicker extends DatePickerBase {
    nativeViewProtected: android.widget.DatePicker;

    public createNativeView() {
        const picker = new android.widget.DatePicker(this._context);
        picker.setCalendarViewShown(false);

        return picker;
    }

    public initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        const listener = new android.widget.DatePicker.OnDateChangedListener({
            onDateChanged: this.onDateChanged.bind(this)
        });
        nativeView.init(this.year, this.month - 1, this.day, listener);
        (<any>nativeView).listener = listener;
    }

    public disposeNativeView() {
        (<any>this.nativeViewProtected).listener.owner = null;
        super.disposeNativeView();
    }

    protected onDateChanged(picker: android.widget.DatePicker, year: number, month: number, day: number) {
        let dateChanged = false;
        if (year !== this.year) {
            yearProperty.nativeValueChange(this, year);
            dateChanged = true;
        }

        if (month !== (this.month - 1)) {
            monthProperty.nativeValueChange(this, month + 1);
            dateChanged = true;
        }

        if (day !== this.day) {
            dayProperty.nativeValueChange(this, day);
            dateChanged = true;
        }

        if (dateChanged) {
            dateProperty.nativeValueChange(this, new Date(year, month, day));
        }
    }

    private updateNativeDate(): void {
        const nativeView = this.nativeViewProtected;
        const year = typeof this.year === "number" ? this.year : nativeView.getYear();
        const month = typeof this.month === "number" ? this.month - 1 : nativeView.getMonth();
        const day = typeof this.day === "number" ? this.day : nativeView.getDayOfMonth();
        this.date = new Date(year, month, day);
    }

    [yearProperty.setNative](value: number) {
        if (this.nativeViewProtected.getYear() !== value) {
            this.updateNativeDate();
        }
    }

    [monthProperty.setNative](value: number) {
        if (this.nativeViewProtected.getMonth() !== (value - 1)) {
            this.updateNativeDate();
        }
    }

    [dayProperty.setNative](value: number) {
        if (this.nativeViewProtected.getDayOfMonth() !== value) {
            this.updateNativeDate();
        }
    }

    [dateProperty.setNative](value: Date) {
        const nativeView = this.nativeViewProtected;
        if (nativeView.getDayOfMonth() !== value.getDate()
            || nativeView.getMonth() !== value.getMonth()
            || nativeView.getYear() !== value.getFullYear()) {
            nativeView.updateDate(value.getFullYear(), value.getMonth(), value.getDate());
        }
    }

    [maxDateProperty.getDefault](): number {
        return this.nativeViewProtected.getMaxDate();
    }
    [maxDateProperty.setNative](value: Date | number) {
        const newValue = value instanceof Date ? value.getTime() : value;
        this.nativeViewProtected.setMaxDate(newValue);
    }

    [minDateProperty.getDefault](): number {
        return this.nativeViewProtected.getMinDate();
    }
    [minDateProperty.setNative](value: Date | number) {
        const newValue = value instanceof Date ? value.getTime() : value;
        this.nativeViewProtected.setMinDate(newValue);
    }
}
