import type { BaseColumnOption, CellAddress, CellContext, ColumnTypeAPI, EventListenerId, GridCanvasHelperAPI, LayoutObjectId, ListGridAPI, MaybePromise, Message } from "../../ts-types";
import type { DrawCellInfo } from "../../ts-types-internal";
import { BaseStyle } from "../style/BaseStyle";
export declare abstract class BaseColumn<T> implements ColumnTypeAPI {
    private _fadeinWhenCallbackInPromise?;
    constructor(option?: BaseColumnOption);
    get fadeinWhenCallbackInPromise(): boolean | undefined | null;
    get StyleClass(): typeof BaseStyle;
    onDrawCell(cellValue: MaybePromise<unknown>, info: DrawCellInfo<T>, context: CellContext, grid: ListGridAPI<T>): void | Promise<void>;
    abstract clone(): BaseColumn<T>;
    convertInternal(value: unknown): unknown;
    abstract drawInternal(value: unknown, context: CellContext, style: BaseStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
    drawMessageInternal(message: Message, context: CellContext, style: BaseStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
    bindGridEvent(_grid: ListGridAPI<T>, _cellId: LayoutObjectId): EventListenerId[];
    getCopyCellValue(value: MaybePromise<unknown>, _grid: ListGridAPI<T>, _cell: CellAddress): unknown;
}
