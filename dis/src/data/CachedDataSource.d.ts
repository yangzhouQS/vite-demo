import type { FieldData, FieldDef, MaybePromise, MaybePromiseOrUndef } from "../ts-types";
import { DataSource } from "./DataSource";
import type { DataSourceParam } from "./DataSource";
import type { PromiseCacheValue } from "./internal/types";
/**
 * grid data source for caching Promise data
 *
 * @classdesc cheetahGrid.data.CachedDataSource
 * @memberof cheetahGrid.data
 */
export declare class CachedDataSource<T> extends DataSource<T> {
    private _rCache;
    private _fCache;
    static get EVENT_TYPE(): typeof DataSource.EVENT_TYPE;
    static ofArray<T>(array: T[]): CachedDataSource<T>;
    constructor(opt?: DataSourceParam<T>);
    protected getOriginal(index: number): MaybePromiseOrUndef<T>;
    protected getOriginalField<F extends FieldDef<T>>(index: number, field: F): FieldData;
    protected setOriginalField<F extends FieldDef<T>>(index: number, field: F, value: any): MaybePromise<boolean>;
    clearCache(): void;
    protected fieldPromiseCallBackInternal<F extends FieldDef<T>>(index: number, field: F, value: PromiseCacheValue<any>): void;
    protected recordPromiseCallBackInternal(index: number, record: PromiseCacheValue<T>): void;
    dispose(): void;
}
