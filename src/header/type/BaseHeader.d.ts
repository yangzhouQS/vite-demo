import type { CellAddress, CellContext, EventListenerId, LayoutObjectId, ListGridAPI } from "../../ts-types";
import { BaseStyle } from "../style/BaseStyle";
import type { DrawCellInfo } from "../../ts-types-internal";
import type { GridCanvasHelper } from "../../GridCanvasHelper";
export declare abstract class BaseHeader<T> {
    constructor(_options?: {});
    get StyleClass(): typeof BaseStyle;
    onDrawCell(cellValue: unknown, info: DrawCellInfo<T>, context: CellContext, grid: ListGridAPI<T>): void;
    convertInternal(value: unknown): unknown;
    abstract drawInternal(value: unknown, context: CellContext, style: BaseStyle, helper: GridCanvasHelper<T>, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
    bindGridEvent(_grid: ListGridAPI<T>, _cellId: LayoutObjectId): EventListenerId[];
    getCopyCellValue(value: unknown, _grid: ListGridAPI<T>, _cell: CellAddress): unknown;
}
