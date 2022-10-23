import type { CellContext, GridCanvasHelperAPI, ListGridAPI } from "../../ts-types";
import { BaseColumn } from "./BaseColumn";
import type { DrawCellInfo } from "../../ts-types-internal";
import { Style } from "../style/Style";
export declare class Column<T> extends BaseColumn<T> {
    get StyleClass(): typeof Style;
    clone(): Column<T>;
    drawInternal(value: unknown, context: CellContext, style: Style, helper: GridCanvasHelperAPI, _grid: ListGridAPI<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
