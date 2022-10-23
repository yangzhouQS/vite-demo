import type { CellContext, GridCanvasHelperAPI } from "../../ts-types";
import type { DrawCellInfo, GridInternal } from "../../ts-types-internal";
import { BaseColumn } from "./BaseColumn";
import { CheckStyle } from "../style/CheckStyle";
export declare class CheckColumn<T> extends BaseColumn<T> {
    get StyleClass(): typeof CheckStyle;
    clone(): CheckColumn<T>;
    convertInternal(value: unknown): boolean;
    drawInternal(value: boolean, context: CellContext, style: CheckStyle, helper: GridCanvasHelperAPI, grid: GridInternal<T>, { drawCellBase }: DrawCellInfo<T>): void;
}
