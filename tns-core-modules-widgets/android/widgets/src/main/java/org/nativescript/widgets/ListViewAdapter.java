package org.nativescript.widgets;

import android.view.View;
import android.view.ViewGroup;

public class ListViewAdapter extends android.widget.BaseAdapter {
    public interface Interface {
        public int getCount();

        public int getViewTypeCount();

        public Object getItem(int position);

        public long getItemId(int position);

        public int getItemViewType(int position);

        public boolean hasStableIds();

        public View getView(int position, View convertView, ViewGroup parent);
    }

    public Interface inter;

    public ListViewAdapter() {
        super();
    }

    public ListViewAdapter(Interface inter) {
        super();
        this.setInterface(inter);
    }


    public void setInterface(Interface inter) {
        this.inter = inter;
    }


    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (this.inter != null) {
            this.inter.getView(position, convertView, parent);
        }
        return null;
    }

    @Override
    public int getCount() {
        if (this.inter != null) {
            return this.inter.getCount();
        }
        return 0;
    }

    @Override
    public int getViewTypeCount() {
        if (this.inter != null) {
            return this.inter.getViewTypeCount();
        }
        return 0;
    }

    @Override
    public long getItemId(int position) {
        if (this.inter != null) {
            return this.inter.getItemId(position);
        }
        return 0;
    }

    @Override
    public int getItemViewType(int position) {
        if (this.inter != null) {
            return this.inter.getItemViewType(position);
        }
        return 0;
    }

    @Override
    public Object getItem(int position) {
        if (this.inter != null) {
            return this.inter.getItem(position);
        }
        return null;
    }

    @Override
    public boolean hasStableIds() {
        if (this.inter != null) {
            return this.inter.hasStableIds();
        }
        return true;
    }

}