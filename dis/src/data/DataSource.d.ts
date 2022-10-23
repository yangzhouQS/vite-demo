import type { DataSourceAPI, FieldData, FieldDef, MaybePromise, MaybePromiseOrUndef } from "../ts-types";
import { EventTarget } from "../core/EventTarget";
import type { PromiseCacheValue } from "./internal/types";
/** @private */
declare const EVENT_TYPE: {
    readonly UPDATE_LENGTH: "update_length";
    readonly UPDATED_LENGTH: "updated_length";
    readonly UPDATED_ORDER: "updated_order";
};
export interface DataSourceParam<T> {
    get: (index: number) => T;
    length: number;
    source?: any;
}
/**
 * grid data source
 *
 * @classdesc cheetahGrid.data.DataSource
 * @memberof cheetahGrid.data
 */
export declare class DataSource<T> extends EventTarget implements DataSourceAPI<T> {
    private _get;
    private _length;
    private readonly _source;
    protected _sortedIndexMap: null | number[];
    static get EVENT_TYPE(): typeof EVENT_TYPE;
    static ofArray<T>(array: T[]): DataSource<T>;
    constructor(obj?: DataSourceParam<T> | DataSource<T>);
    get source(): any;
    get(index: number): MaybePromiseOrUndef<T>;
    getField<F extends FieldDef<T>>(index: number, field: F): FieldData;
    hasField(index: number, field: FieldDef<T>): boolean;
    setField<F extends FieldDef<T>>(index: number, field: F, value: any): MaybePromise<boolean>;
    sort(field: FieldDef<T>, order: "desc" | "asc"): MaybePromise<void>;
    get length(): number;
    set length(length: number);
    get dataSource(): DataSource<T>;
    dispose(): void;
    protected getOriginal(index: number): MaybePromiseOrUndef<T>;
    protected getOriginalField<F extends FieldDef<T>>(index: number, field: F): FieldData;
    protected hasOriginalField(index: number, field: FieldDef<T>): boolean;
    protected setOriginalField<F extends FieldDef<T>>(index: number, field: F, value: any): MaybePromise<boolean>;
    protected fieldPromiseCallBackInternal<F extends FieldDef<T>>(_index: number, _field: F, _value: PromiseCacheValue<any>): void;
    protected recordPromiseCallBackInternal(_index: number, _record: PromiseCacheValue<T>): void;
    static EMPTY: DataSource<any>;
}
export {};
