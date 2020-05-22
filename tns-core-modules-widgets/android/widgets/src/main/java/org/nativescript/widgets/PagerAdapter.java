package org.nativescript.widgets;

import android.view.View;
import android.view.ViewGroup;

public class PagerAdapter extends androidx.viewpager.widget.PagerAdapter {

    public interface Interface {
        public View instantiateItem(ViewGroup container, int position);

        public void destroyItem(ViewGroup container, int position, java.lang.Object object);

        public void setPrimaryItem(ViewGroup container, int position, java.lang.Object object);

        public int getCount();

        public String getPageTitle(int position);

        public void startUpdate(android.view.ViewGroup container);

        public void finishUpdate(android.view.ViewGroup container);

        public boolean isViewFromObject(android.view.View view, java.lang.Object object);

        public int getItemPosition(Object object);

        public android.os.Parcelable saveState();

        public void restoreState(android.os.Parcelable state, java.lang.ClassLoader loader);
    }

    public Interface adapterInterface;

    public PagerAdapter() {
        super();
    }

    public PagerAdapter(Interface adapterInterface) {
        super();
        this.setInterface(adapterInterface);
    }


    public void setInterface(Interface adapterInterface) {
        this.adapterInterface = adapterInterface;
    }


    @Override
    public View instantiateItem(ViewGroup container, int position) {
        if (this.adapterInterface != null) {
            this.adapterInterface.instantiateItem(container, position);
        }
        return null;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, java.lang.Object object) {
        if (this.adapterInterface != null) {
            this.adapterInterface.destroyItem(container, position, object);
        }
    }

    @Override
    public void setPrimaryItem(ViewGroup container, int position, java.lang.Object object) {
        if (this.adapterInterface != null) {
            this.adapterInterface.setPrimaryItem(container, position, object);
        }
    }

    @Override
    public int getCount() {
        if (this.adapterInterface != null) {
            return this.adapterInterface.getCount();
        }
        return 0;
    }


    @Override
    public String getPageTitle(int position) {
        if (this.adapterInterface != null) {
            return this.adapterInterface.getPageTitle(position);
        }
        return null;
    }

    @Override
    public void startUpdate(android.view.ViewGroup container) {
        if (this.adapterInterface != null) {
            this.adapterInterface.startUpdate(container);
        }
    }

    @Override
    public void finishUpdate(android.view.ViewGroup container) {
        if (this.adapterInterface != null) {
            this.adapterInterface.finishUpdate(container);
        }
    }

    @Override
    public boolean isViewFromObject(android.view.View view, java.lang.Object object) {
        if (this.adapterInterface != null) {
            return this.adapterInterface.isViewFromObject(view, object);
        }
        return false;
    }

    @Override
    public int getItemPosition(Object object) {
        if (this.adapterInterface != null) {
            return this.adapterInterface.getItemPosition(object);
        }
        return -1;
    }

    @Override
    public android.os.Parcelable saveState() {
        if (this.adapterInterface != null) {
            return this.adapterInterface.saveState();
        }
        return null;
    }

    @Override
    public void restoreState(android.os.Parcelable state, java.lang.ClassLoader loader) {
        if (this.adapterInterface != null) {
            this.adapterInterface.restoreState(state, loader);
        }
    }
}
