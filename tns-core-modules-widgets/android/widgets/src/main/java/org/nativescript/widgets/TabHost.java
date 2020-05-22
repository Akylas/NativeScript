package org.nativescript.widgets;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.AttributeSet;

public class TabHost extends android.widget.TabHost {

    public TabHost(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    @SuppressLint("MissingSuperCall")
    @Override
    public void onAttachedToWindow() {
        // overriden to remove the code that will steal the focus from edit fields.
    }
}
