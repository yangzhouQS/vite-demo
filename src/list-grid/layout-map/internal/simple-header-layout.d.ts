import type { CellRange, LayoutObjectId } from "../../../ts-types";
import type { ColumnData, HeaderData, HeadersDefine, LayoutMapAPI } from "../api";
export declare class SimpleHeaderLayoutMap<T> implements LayoutMapAPI<T> {
    private _headerObjects;
    private _headerObjectMap;
    private _headerCellIds;
    private _columns;
    readonly bodyRowCount: number;
    private _emptyDataCache;
    constructor(header: HeadersDefine<T>);
    get columnWidths(): ColumnData<T>[];
    get headerRowCount(): number;
    get colCount(): number;
    get headerObjects(): HeaderData<T>[];
    get columnObjects(): ColumnData<T>[];
    getCellId(col: number, row: number): LayoutObjectId;
    getHeader(col: number, row: number): HeaderData<T>;
    getBody(col: number, _row: number): ColumnData<T>;
    getBodyLayoutRangeById(id: LayoutObjectId): CellRange;
    getCellRange(col: number, row: number): CellRange;
    getRecordIndexByRow(row: number): number;
    getRecordStartRowByRecordIndex(index: number): number;
    private _addHeaders;
    private _newRow;
}
