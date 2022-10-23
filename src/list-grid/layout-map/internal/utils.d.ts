import type { ColumnData, HeaderData } from "../api";
export declare function newEmptyHeaderData(): HeaderData<any>;
export declare function newEmptyColumnData(): ColumnData<any>;
export declare class EmptyDataCache<T> {
    private headers;
    private columns;
    getHeader(col: number, row: number): HeaderData<T>;
    getBody(col: number, row: number): ColumnData<T>;
}
