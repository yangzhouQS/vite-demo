import type { CellContext, ListGridAPI } from "../../ts-types";
import { BaseHeader } from "./BaseHeader";
import type { DrawCellInfo } from "../../ts-types-internal";
import type { GridCanvasHelper } from "../../GridCanvasHelper";
import { SortHeaderStyle } from "../style/SortHeaderStyle";
export declare class SortHeader<T> extends BaseHeader<T> {
    get StyleClass(): typeof SortHeaderStyle;
    drawInternal(value: unknown, context: CellContext, style: SortHeaderStyle, helper: GridCanvasHelper<T>, grid: ListGridAPI<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
