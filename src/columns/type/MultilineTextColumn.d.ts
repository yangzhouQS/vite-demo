import type { CellContext, GridCanvasHelperAPI, ListGridAPI } from "../../ts-types";
import { BaseColumn } from "./BaseColumn";
import type { DrawCellInfo } from "../../ts-types-internal";
import { MultilineTextStyle } from "../style/MultilineTextStyle";
export declare class MultilineTextColumn<T> extends BaseColumn<T> {
    constructor(option?: {});
    get StyleClass(): typeof MultilineTextStyle;
    clone(): MultilineTextColumn<T>;
    drawInternal(value: unknown, context: CellContext, style: MultilineTextStyle, helper: GridCanvasHelperAPI, _grid: ListGridAPI<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
