import type { CellContext, ListGridAPI } from "../../ts-types";
import { BaseHeader } from "./BaseHeader";
import type { DrawCellInfo } from "../../ts-types-internal";
import type { GridCanvasHelper } from "../../GridCanvasHelper";
import { Style } from "../style/Style";
export declare class Header<T> extends BaseHeader<T> {
    get StyleClass(): typeof Style;
    drawInternal(value: unknown, context: CellContext, style: Style, helper: GridCanvasHelper<T>, _grid: ListGridAPI<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
