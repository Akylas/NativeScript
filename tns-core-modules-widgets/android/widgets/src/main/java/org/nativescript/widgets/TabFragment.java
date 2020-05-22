package org.nativescript.widgets;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class TabFragment extends FragmentBase {
    public interface Interface {
        public View onCreateView(@NonNull TabFragment fragment, @NonNull LayoutInflater inflater, @Nullable ViewGroup container,
                                 @Nullable Bundle savedInstanceState);
        public void onPause(@NonNull TabFragment fragment);
        public void onDestroyView(@NonNull TabFragment fragment);
    }

    Interface inter;


    public void setInterface(Interface inter) {
        this.inter = inter;
    }

    @Override
    @Nullable
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        if (this.inter != null) {
            return this.inter.onCreateView(this, inflater, container, savedInstanceState);
        }
        return null;
    }
    @Override
    public void onPause() {
        if (this.inter != null) {
            this.inter.onPause(this);
        }
        super.onPause();
    }
    @Override
    public void onDestroyView() {
        if (this.inter != null) {
            this.inter.onDestroyView(this);
        }
        super.onDestroyView();
    }
}
