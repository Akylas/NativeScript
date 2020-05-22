package org.nativescript.widgets;

public class ClickableSpan extends android.text.style.ClickableSpan {
    public interface Listener {
        public void onClick(android.view.View view);
        public void updateDrawState(android.text.TextPaint paint);
    }

    ClickableSpan.Listener listener;

    public ClickableSpan(ClickableSpan.Listener listener) {
        super();
        setListener(listener);
    }

    public void setListener(ClickableSpan.Listener listener) {
        this.listener = listener;
    }

    @Override
    public void onClick(android.view.View view) {
        if (listener != null) {
            listener.onClick(view);
        }
    }
    @Override
    public void updateDrawState(android.text.TextPaint paint) {
        if (listener != null) {
            listener.updateDrawState(paint);
        }
    }
}
