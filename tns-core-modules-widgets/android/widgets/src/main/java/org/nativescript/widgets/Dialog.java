package org.nativescript.widgets;

import android.content.Context;
import android.view.ViewGroup;
import android.view.View;

public class Dialog extends android.app.Dialog {
    public interface Listener {
        boolean onBackPressed(Dialog dialog);

        void onDetachedFromWindow(Dialog dialog);
    }

    Listener listener;

    public Dialog(Context context, int themeResId) {
        super(context, themeResId);
    }

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    @Override
    public void onBackPressed() {
        if (listener == null || !listener.onBackPressed(this)) {
            super.onBackPressed();
        }
    }

    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        if (listener != null) {
            listener.onDetachedFromWindow(this);
        }
    }

}