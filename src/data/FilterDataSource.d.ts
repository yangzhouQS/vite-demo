import type { FieldDef, MaybePromise, MaybePromiseOrUndef } from "../ts-types";
import { DataSource } from "./DataSource";
/** @private */
declare type Filter<T> = (record: T | undefined) => boolean;
/**
 * grid data source for filter
 *
 * @classdesc cheetahGrid.data.FilterDataSource
 * @memberof cheetahGrid.data
 */
export declare class FilterDataSource<T> extends DataSource<T> {
    private _dataSource;
    private _handler;
    private _filterData;
    static get EVENT_TYPE(): typeof DataSource.EVENT_TYPE;
    constructor(dataSource: DataSource<T>, filter: Filter<T>);
    get filter(): Filter<T> | null;
    set filter(filter: Filter<T> | null);
    protected getOriginal(index: number): MaybePromiseOrUndef<T>;
    sort(field: FieldDef<T>, order: "desc" | "asc"): MaybePromise<void>;
    get source(): any;
    get dataSource(): DataSource<T>;
    dispose(): void;
}
export {};
