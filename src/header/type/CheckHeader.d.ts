import type { CellContext } from "../../ts-types";
import type { DrawCellInfo, GridInternal } from "../../ts-types-internal";
import { BaseHeader } from "./BaseHeader";
import { CheckHeaderStyle } from "../style/CheckHeaderStyle";
import type { GridCanvasHelper } from "../../GridCanvasHelper";
export declare class CheckHeader<T> extends BaseHeader<T> {
    get StyleClass(): typeof CheckHeaderStyle;
    clone(): CheckHeader<T>;
    drawInternal(value: unknown, context: CellContext, style: CheckHeaderStyle, helper: GridCanvasHelper<T>, grid: GridInternal<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
