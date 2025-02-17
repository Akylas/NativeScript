import { disableZoomProperty, WebViewBase, WebViewClient } from './web-view-common';
import { Trace } from '../../trace';
import { knownFolders } from '../../file-system';
import { openUrl } from '../../utils';
import { FILE_PREFIX } from '../../utils/common';

export * from './web-view-common';

let WebViewClient: WebViewClient;

function initializeWebViewClient(): void {
	if (WebViewClient) {
		return;
	}

	@NativeClass
	class WebViewClientImpl extends android.webkit.WebViewClient {
		constructor(public owner: WebViewBase) {
			super();

			return global.__native(this);
		}

		public shouldOverrideUrlLoading(view: android.webkit.WebView, target: any) {
			const url: string = target instanceof android.webkit.WebResourceRequest ? target.getUrl().toString() : target;

			if (Trace.isEnabled()) {
				Trace.write('WebViewClientClass.shouldOverrideUrlLoading(' + url + ')', Trace.categories.Debug);
			}

			// Handle schemes like mailto, tel, etc
			if (!android.webkit.URLUtil.isNetworkUrl(url)) {
				return openUrl(url);
			}

			return false;
		}

		public onPageStarted(view: android.webkit.WebView, url: string, favicon: android.graphics.Bitmap) {
			super.onPageStarted(view, url, favicon);
			const owner = this.owner;
			if (owner) {
				if (Trace.isEnabled()) {
					Trace.write('WebViewClientClass.onPageStarted(' + url + ', ' + favicon + ')', Trace.categories.Debug);
				}
				owner._onLoadStarted(url, undefined);
			}
		}

		public onPageFinished(view: android.webkit.WebView, url: string) {
			super.onPageFinished(view, url);
			const owner = this.owner;
			if (owner) {
				if (Trace.isEnabled()) {
					Trace.write('WebViewClientClass.onPageFinished(' + url + ')', Trace.categories.Debug);
				}
				owner._onLoadFinished(url, undefined);
			}
		}

		public onReceivedError(...args) {
			const view: android.webkit.WebView = args[0];

			if (arguments.length === 4) {
				const errorCode: number = args[1];
				const description: string = args[2];
				const failingUrl: string = args[3];

				super.onReceivedError(view, errorCode, description, failingUrl);

				const owner = this.owner;
				if (owner) {
					if (Trace.isEnabled()) {
						Trace.write('WebViewClientClass.onReceivedError(' + errorCode + ', ' + description + ', ' + failingUrl + ')', Trace.categories.Debug);
					}
					owner._onLoadFinished(failingUrl, description + '(' + errorCode + ')');
				}
			} else {
				const request: any = args[1];
				const error: any = args[2];

				// before API version 23 there's no onReceiveError with 3 parameters, so it shouldn't come here
				// but we don't have the onReceivedError with 3 parameters there and that's why we are ignorint tye typescript error
				// @ts-ignore TS2554
				super.onReceivedError(view, request, error);

				const owner = this.owner;
				if (owner) {
					if (Trace.isEnabled()) {
						Trace.write('WebViewClientClass.onReceivedError(' + error.getErrorCode() + ', ' + error.getDescription() + ', ' + (error.getUrl && error.getUrl()) + ')', Trace.categories.Debug);
					}
					owner._onLoadFinished(error.getUrl && error.getUrl(), error.getDescription() + '(' + error.getErrorCode() + ')');
				}
			}
		}
	}

	WebViewClient = <any>WebViewClientImpl;
}

export class WebView extends WebViewBase {
	declare nativeViewProtected: android.webkit.WebView;

	public createNativeView() {
		const nativeView = new android.webkit.WebView(this._context);
		const settings = nativeView.getSettings();
		settings.setJavaScriptEnabled(true);
		settings.setBuiltInZoomControls(true);
		settings.setAllowFileAccess(true);

		return nativeView;
	}

	public initNativeView(): void {
		super.initNativeView();
		initializeWebViewClient();
		const nativeView = this.nativeViewProtected;
		const client = new WebViewClient(<any>this);
		nativeView.setWebViewClient(client);
		(<any>nativeView).client = client;
		this._disableZoom(this.disableZoom);
	}

	public disposeNativeView() {
		const nativeView = this.nativeViewProtected;
		if (nativeView) {
			if ((<any>nativeView).client) {
				(<any>nativeView).client.owner = null;
			}
			nativeView.destroy();
			nativeView.setWebViewClient(null);
			(<any>nativeView).client.owner = null;
		}
		super.disposeNativeView();
	}

	private _disableZoom(value: boolean) {
		if (this.nativeView && value) {
			const settings = this.nativeView.getSettings();
			settings.setBuiltInZoomControls(false);
			settings.setSupportZoom(false);
			settings.setDisplayZoomControls(false);
		}
	}

	[disableZoomProperty.setNative](value: boolean) {
		this._disableZoom(value);
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

		const baseUrl = `${FILE_PREFIX}${knownFolders.currentApp().path}/`;
		nativeView.loadDataWithBaseURL(baseUrl, src, 'text/html', 'utf-8', null);
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
