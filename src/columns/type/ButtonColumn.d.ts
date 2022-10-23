import type { ButtonColumnOption, CellContext, GridCanvasHelperAPI, MaybePromise } from "../../ts-types";
import type { DrawCellInfo, GridInternal } from "../../ts-types-internal";
import { ButtonStyle } from "../style/ButtonStyle";
import { Column } from "./Column";
export declare class ButtonColumn<T> extends Column<T> {
    private _caption?;
    constructor(option?: ButtonColumnOption);
    get StyleClass(): typeof ButtonStyle;
    get caption(): string | undefined;
    withCaption(caption: string): ButtonColumn<T>;
    clone(): ButtonColumn<T>;
    convertInternal(value: unknown): unknown;
    getCopyCellValue(value: MaybePromise<unknown>): unknown;
    drawInternal(value: unknown, context: CellContext, style: ButtonStyle, helper: GridCanvasHelperAPI, grid: GridInternal<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
