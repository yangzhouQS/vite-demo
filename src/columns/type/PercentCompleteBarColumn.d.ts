import type { CellContext, GridCanvasHelperAPI, ListGridAPI, PercentCompleteBarColumnOption } from "../../ts-types";
import { Column } from "./Column";
import type { DrawCellInfo } from "../../ts-types-internal";
import { PercentCompleteBarStyle } from "../style/PercentCompleteBarStyle";
export declare class PercentCompleteBarColumn<T> extends Column<T> {
    private _min;
    private _max;
    private _formatter;
    constructor(option?: PercentCompleteBarColumnOption);
    get StyleClass(): typeof PercentCompleteBarStyle;
    clone(): PercentCompleteBarColumn<T>;
    drawInternal(value: unknown, context: CellContext, style: PercentCompleteBarStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
}
