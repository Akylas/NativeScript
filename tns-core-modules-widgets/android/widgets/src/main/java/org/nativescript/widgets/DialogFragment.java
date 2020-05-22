package org.nativescript.widgets;


public class DialogFragment extends androidx.fragment.app.DialogFragment {
    public interface Listener {
        android.app.Dialog onCreateDialog(DialogFragment fragment, android.os.Bundle savedInstanceState);

        android.view.View onCreateView(DialogFragment fragment, android.view.LayoutInflater inflater, android.view.ViewGroup container,
                android.os.Bundle savedInstanceState);

        void onStart(DialogFragment fragment);

        void onDismiss(DialogFragment fragment, android.content.DialogInterface dialog);

        void onDestroy(DialogFragment fragment);
    }

    Listener listener;

    public DialogFragment() {
        super();
    }

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    @Override
    public android.app.Dialog onCreateDialog(android.os.Bundle savedInstanceState) {
        if (listener != null) {
            return listener.onCreateDialog(this, savedInstanceState);
        }
        return super.onCreateDialog(savedInstanceState);
    }

    @Override
    public android.view.View onCreateView(android.view.LayoutInflater inflater, android.view.ViewGroup container,
            android.os.Bundle savedInstanceState) {
        if (listener != null) {
            return listener.onCreateView(this, inflater, container, savedInstanceState);
        }

        return super.onCreateView(inflater, container, savedInstanceState);
    }

    @Override
    public void onStart() {
        super.onStart();
        if (listener != null) {
            listener.onStart(this);
        }
    }

    @Override
    public void onDismiss(android.content.DialogInterface dialog) {
        super.onDismiss(dialog);
        if (listener != null) {
            listener.onDismiss(this, dialog);
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (listener != null) {
            listener.onDestroy(this);
        }
    }

}