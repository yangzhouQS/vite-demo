import type { ColumnData, HeaderData, LayoutDefine, LayoutMapAPI, WidthData } from "../api";
import type { CellRange, LayoutObjectId } from "../../../ts-types";
export declare class MultiLayoutMap<T> implements LayoutMapAPI<T> {
    private _header;
    private _body;
    private _columnWidths;
    private _columnCount;
    private _emptyDataCache;
    constructor(layout: LayoutDefine<T>);
    get columnWidths(): WidthData[];
    get headerRowCount(): number;
    get bodyRowCount(): number;
    get colCount(): number;
    get headerObjects(): HeaderData<T>[];
    get columnObjects(): ColumnData<T>[];
    getCellId(col: number, row: number): LayoutObjectId;
    getHeader(col: number, row: number): HeaderData<T>;
    getBody(col: number, row: number): ColumnData<T>;
    getBodyLayoutRangeById(id: LayoutObjectId): CellRange;
    getCellRange(col: number, row: number): CellRange;
    getRecordIndexByRow(row: number): number;
    getRecordStartRowByRecordIndex(index: number): number;
    private _getCellRange;
}
