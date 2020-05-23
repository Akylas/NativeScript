import { ItemEventData, ItemsSource } from ".";
import {
    ListViewBase, View, KeyedTemplate, Length, unsetValue, Observable, Color,
    separatorColorProperty, itemTemplatesProperty
} from "./list-view-common";
import { StackLayout } from "../layouts/stack-layout";
import { ProxyViewContainer } from "../proxy-view-container";
import { LayoutBase } from "../layouts/layout-base";
import { profile } from "../../profiling";

export * from "./list-view-common";

const ITEMLOADING = ListViewBase.itemLoadingEvent;
const LOADMOREITEMS = ListViewBase.loadMoreItemsEvent;
const ITEMTAP = ListViewBase.itemTapEvent;

export class ListView extends ListViewBase {
    nativeViewProtected: android.widget.ListView;
    private _androidViewId: number = -1;

    public _realizedItems = new Map<android.view.View, View>();
    public _realizedTemplates = new Map<string, Map<android.view.View, View>>();

    @profile
    public createNativeView() {
        const listView = new android.widget.ListView(this._context);
        listView.setDescendantFocusability(android.view.ViewGroup.FOCUS_AFTER_DESCENDANTS);

        // Fixes issue with black random black items when scrolling
        listView.setCacheColorHint(android.graphics.Color.TRANSPARENT);

        return listView;
    }

    public initNativeView(): void {
        super.initNativeView();
        this.updateEffectiveRowHeight();

        const nativeView = this.nativeViewProtected;

        const adapterInterface = new org.nativescript.widgets.ListViewAdapter.Interface({
            getCount: this.getCount.bind(this) ,
            getItem: this.getItem.bind(this) ,
            getItemId: this.getItemId.bind(this) ,
            hasStableIds: this.hasStableIds.bind(this) ,
            getViewTypeCount: this.getViewTypeCount.bind(this) ,
            getItemViewType: this.getItemViewType.bind(this) ,
        
             getView: this.getView.bind(this) ,
        });
        const adapter = new org.nativescript.widgets.ListViewAdapter(adapterInterface);
        nativeView.setAdapter(adapter);
        (<any>nativeView).adapter = adapter;

        const itemClickListener = new android.widget.AdapterView.OnItemClickListener({
            onItemClick: this.onItemClick.bind(this)
        });
        nativeView.setOnItemClickListener(itemClickListener);
        (<any>nativeView).itemClickListener = itemClickListener;

        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        nativeView.setId(this._androidViewId);
    }

    public disposeNativeView() {
        const nativeView = this.nativeViewProtected;
        nativeView.setAdapter(null);
        (<any>nativeView).itemClickListener.owner = null;
        (<any>nativeView).adapter.owner = null;
        this.clearRealizedCells();
        super.disposeNativeView();
    }

    public onLoaded() {
        super.onLoaded();
        // Without this call itemClick won't be fired... :(
        this.requestLayout();
    }

    protected getCount() {
        return this && this.items && this.items.length ? this.items.length : 0;
    }

    protected getItem(i: number) {
        if (this && this.items && i < this.items.length) {
            let getItem = (<ItemsSource>this.items).getItem;

            return getItem ? getItem.call(this.items, i) : this.items[i];
        }

        return null;
    }

    protected getItemId(i: number) {
        let item = this.getItem(i);
        let id = i;
        if (this && item && this.items) {
            id = this.itemIdGenerator(item, i, this.items);
        }

        return long(id);
    }

    protected hasStableIds(): boolean {
        return true;
    }

    protected getViewTypeCount() {
        return this._itemTemplatesInternal.length;
    }

    protected getItemViewType(index: number) {
        let template = this._getItemTemplate(index);
        let itemViewType = this._itemTemplatesInternal.indexOf(template);

        return itemViewType;
    }

    @profile
    protected getView(index: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {

        let totalItemCount = this.items ? this.items.length : 0;
        if (index === (totalItemCount - 1)) {
            this.notify({ eventName: LOADMOREITEMS, object: this });
        }

        // Recycle an existing view or create a new one if needed.
        let template = this._getItemTemplate(index);
        let view: View;
        if (convertView) {
            view = this._realizedTemplates.get(template.key).get(convertView);
            if (!view) {
                throw new Error(`There is no entry with key '${convertView}' in the realized views cache for template with key'${template.key}'.`);
            }
        }
        else {
            view = template.createView();
        }

        let args: ItemEventData = {
            eventName: ITEMLOADING, object: this, index: index, view: view,
            android: parent,
            ios: undefined
        };

        this.notify(args);

        if (!args.view) {
            args.view = this._getDefaultItemContent(index);
        }

        if (args.view) {
            if (this._effectiveRowHeight > -1) {
                args.view.height = this.rowHeight;
            }
            else {
                args.view.height = <Length>unsetValue;
            }

            this._prepareItem(args.view, index);
            if (!args.view.parent) {
                // Proxy containers should not get treated as layouts.
                // Wrap them in a real layout as well.
                if (args.view instanceof LayoutBase &&
                    !(args.view instanceof ProxyViewContainer)) {
                    this._addView(args.view);
                    convertView = args.view.nativeViewProtected;
                } else {
                    let sp = new StackLayout();
                    sp.addChild(args.view);
                    this._addView(sp);

                    convertView = sp.nativeViewProtected;
                }
            }

            // Cache the view for recycling
            let realizedItemsForTemplateKey = this._realizedTemplates.get(template.key);
            if (!realizedItemsForTemplateKey) {
                realizedItemsForTemplateKey = new Map<android.view.View, View>();
                this._realizedTemplates.set(template.key, realizedItemsForTemplateKey);
            }
            realizedItemsForTemplateKey.set(convertView, args.view);
            this._realizedItems.set(convertView, args.view);
        }

        return convertView;
    }

    protected onItemClick<T extends android.widget.Adapter>(parent: android.widget.AdapterView<T>, convertView: android.view.View, index: number, id: number) {
        const view = this._realizedTemplates.get(this._getItemTemplate(index).key).get(convertView);
        this.notify({ eventName: ITEMTAP, object: this, index: index, view: view });
    }

    public refresh() {
        const nativeView = this.nativeViewProtected;
        if (!nativeView || !nativeView.getAdapter()) {
            return;
        }

        // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
        this._realizedItems.forEach((view, nativeView) => {
            if (!(view.bindingContext instanceof Observable)) {
                view.bindingContext = null;
            }
        });

        (<android.widget.BaseAdapter>nativeView.getAdapter()).notifyDataSetChanged();
    }

    public scrollToIndex(index: number) {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.setSelection(index);
        }
    }

    public scrollToIndexAnimated(index: number) {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.smoothScrollToPosition(index);
        }
    }

    get _childrenCount(): number {
        return this._realizedItems.size;
    }

    public eachChildView(callback: (child: View) => boolean): void {
        this._realizedItems.forEach((view, nativeView) => {
            if (view.parent instanceof ListView) {
                callback(view);
            }
            else {
                // in some cases (like item is unloaded from another place (like angular) view.parent becomes undefined)
                if (view.parent) {
                    callback(<View>view.parent);
                }
            }
        });
    }

    public _dumpRealizedTemplates() {
        console.log(`Realized Templates:`);
        this._realizedTemplates.forEach((value, index) => {
            console.log(`\t${index}:`);
            value.forEach((value, index) => {
                console.log(`\t\t${index.hashCode()}: ${value}`);
            });
        });
        console.log(`Realized Items Size: ${this._realizedItems.size}`);
    }

    private clearRealizedCells(): void {
        // clear the cache
        this._realizedItems.forEach((view, nativeView) => {
            if (view.parent) {
                // This is to clear the StackLayout that is used to wrap non LayoutBase & ProxyViewContainer instances.
                if (!(view.parent instanceof ListView)) {
                    this._removeView(view.parent);
                }
                view.parent._removeView(view);
            }
        });

        this._realizedItems.clear();
        this._realizedTemplates.clear();
    }

    public isItemAtIndexVisible(index: number): boolean {
        let nativeView = this.nativeViewProtected;
        const start = nativeView.getFirstVisiblePosition();
        const end = nativeView.getLastVisiblePosition();

        return (index >= start && index <= end);
    }

    [separatorColorProperty.getDefault](): { dividerHeight: number, divider: android.graphics.drawable.Drawable } {
        let nativeView = this.nativeViewProtected;

        return {
            dividerHeight: nativeView.getDividerHeight(),
            divider: nativeView.getDivider()
        };
    }
    [separatorColorProperty.setNative](value: Color | { dividerHeight: number, divider: android.graphics.drawable.Drawable }) {
        let nativeView = this.nativeViewProtected;
        if (value instanceof Color) {
            nativeView.setDivider(new android.graphics.drawable.ColorDrawable(value.android));
            nativeView.setDividerHeight(1);
        } else {
            nativeView.setDivider(value.divider);
            nativeView.setDividerHeight(value.dividerHeight);
        }
    }

    [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
        return null;
    }
    [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
        this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
        if (value) {
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }

        this.nativeViewProtected.setAdapter((this.nativeViewProtected as any).adapter);
        this.refresh();
    }
}

