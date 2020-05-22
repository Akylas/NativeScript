package org.nativescript.widgets;

import android.util.LruCache;

public class LruBitmapCache extends LruCache<String, android.graphics.Bitmap> {
    public LruBitmapCache(int maxSize) {
        super(maxSize);
    }

    @Override
    public int sizeOf(String key, android.graphics.Bitmap bitmap) {
        // The cache size will be measured in kilobytes rather than
        // number of items.
        int result = Math.round(bitmap.getByteCount() / 1024);

        return result;
    }
}
