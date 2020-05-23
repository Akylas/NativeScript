import { WebViewBase, knownFolders, traceEnabled, traceWrite, traceCategories, WebViewClient } from "./web-view-common";

export * from "./web-view-common";

export class WebView extends WebViewBase {
    nativeViewProtected: android.webkit.WebView;

    public createNativeView() {
        const nativeView = new android.webkit.WebView(this._context);
        nativeView.getSettings().setJavaScriptEnabled(true);
        nativeView.getSettings().setBuiltInZoomControls(true);

        return nativeView;
    }

    public initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        const clientInterface = new org.nativescript.widgets.WebViewClient.Interface({
            onPageStarted:this.onPageStarted.bind(this),
            onPageFinished:this.onPageFinished.bind(this),
            onReceivedError:this.onReceivedError.bind(this),
            shouldOverrideUrlLoading:this.shouldOverrideUrlLoading.bind(this),
        });
        const client = new  org.nativescript.widgets.WebViewClient(clientInterface);
        nativeView.setWebViewClient(client);
        (<any>nativeView).client = client;
        (<any>nativeView).clientInterface = clientInterface;
    }

    public disposeNativeView() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.destroy();
        }

        (<any>nativeView).client = null;
        (<any>nativeView).clientInterface = null;
        super.disposeNativeView();
    }

    protected shouldOverrideUrlLoading(view: android.webkit.WebView, url: string) {
        if (traceEnabled()) {
            traceWrite("WebViewClientClass.shouldOverrideUrlLoading(" + url + ")", traceCategories.Debug);
        }

        return false;
    }

    protected onPageStarted(view: android.webkit.WebView, url: string, favicon: android.graphics.Bitmap) {
        if (traceEnabled()) {
            traceWrite("WebViewClientClass.onPageStarted(" + url + ", " + favicon + ")", traceCategories.Debug);
        }
        this._onLoadStarted(url, undefined);
    }

    protected onPageFinished(view: android.webkit.WebView, url: string) {
        if (traceEnabled()) {
            traceWrite("WebViewClientClass.onPageFinished(" + url + ")", traceCategories.Debug);
        }
        this._onLoadFinished(url, undefined);
    }

    protected onReceivedError(view: android.webkit.WebView,
        errorCode: number,
        description: string,
        failingUrl: string) {
        if (traceEnabled()) {
            traceWrite("WebViewClientClass.onReceivedError(" + errorCode + ", " + description + ", " + failingUrl + ")", traceCategories.Debug);
        }
        this._onLoadFinished(failingUrl, description + "(" + errorCode + ")");
    }

    public _loadUrl(src: string) {
        const nativeView = this.nativeViewProtected;
        if (!nativeView) {
            return;
        }

        nativeView.loadUrl(src);
    }

    public _loadData(src: string) {
        const nativeView = this.nativeViewProtected;
        if (!nativeView) {
            return;
        }

        const baseUrl = `file:///${knownFolders.currentApp().path}/`;
        nativeView.loadDataWithBaseURL(baseUrl, src, "text/html", "utf-8", null);
    }

    get canGoBack(): boolean {
        return this.nativeViewProtected.canGoBack();
    }

    public stopLoading() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.stopLoading();
        }
    }

    get canGoForward(): boolean {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.canGoForward();
        }

        return false;
    }

    public goBack() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.goBack();
        }
    }

    public goForward() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.goForward();
        }
    }

    public reload() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.reload();
        }
    }
}
