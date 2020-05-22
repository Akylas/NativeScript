package org.nativescript.widgets;

import android.graphics.Bitmap;
import android.os.Build;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;

import androidx.annotation.RequiresApi;

public class WebViewClient extends android.webkit.WebViewClient {

    public interface Interface {
        public boolean shouldOverrideUrlLoading(WebView view, String url);

        public void onPageStarted(WebView view, String url, Bitmap favicon);

        public void onPageFinished(WebView view, String url);

        public void onReceivedError(WebView view, int errorCode, String description, String failingUrl);
    }

    WebViewClient.Interface wInterface;

    public WebViewClient(WebViewClient.Interface wInterface) {
        super();
        setInterface(wInterface);
    }

    public void setInterface(WebViewClient.Interface wInterface) {
        this.wInterface = wInterface;
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        if (wInterface != null) {
            return wInterface.shouldOverrideUrlLoading(view, request.getUrl().toString());
        }
        return false;
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        if (wInterface != null) {
            return wInterface.shouldOverrideUrlLoading(view, url);
        }
        return false;
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        if (wInterface != null) {
            wInterface.onPageStarted(view, url, favicon);
        }
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        if (wInterface != null) {
            wInterface.onPageFinished(view, url);
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
        if (wInterface != null) {
            wInterface.onReceivedError(view, error.getErrorCode(), error.getDescription().toString(), request.getUrl().toString());
        }
    }

    @Override
    public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        if (wInterface != null) {
            wInterface.onReceivedError(view, errorCode, description, failingUrl);
        }
    }

}
