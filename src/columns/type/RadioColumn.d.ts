import type { CellContext, GridCanvasHelperAPI } from "../../ts-types";
import type { DrawCellInfo, GridInternal } from "../../ts-types-internal";
import { BaseColumn } from "./BaseColumn";
import { RadioStyle } from "../style/RadioStyle";
export declare class RadioColumn<T> extends BaseColumn<T> {
    get StyleClass(): typeof RadioStyle;
    clone(): RadioColumn<T>;
    convertInternal(value: unknown): boolean;
    drawInternal(value: boolean, context: CellContext, style: RadioStyle, helper: GridCanvasHelperAPI, grid: GridInternal<T>, { drawCellBase }: DrawCellInfo<T>): void;
}
