package org.nativescript.widgets;


import android.content.Context;
import android.content.Intent;

public class BroadcastReceiver extends android.content.BroadcastReceiver {
    public interface Listener {
        public void onReceive(Context context, Intent intent);
    }

    BroadcastReceiver.Listener listener;

    public BroadcastReceiver(BroadcastReceiver.Listener listener) {

        super();
        setListener(listener);
    }

    public void setListener(BroadcastReceiver.Listener listener) {
        this.listener = listener;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (listener != null) {
            listener.onReceive(context, intent);
        }
    }
}
