import type { CellContext, GridCanvasHelperAPI, ListGridAPI, MaybePromise } from "../../ts-types";
import { BaseColumn } from "./BaseColumn";
import type { DrawCellInfo } from "../../ts-types-internal";
import { ImageStyle } from "../style/ImageStyle";
export declare class ImageColumn<T> extends BaseColumn<T> {
    get StyleClass(): typeof ImageStyle;
    onDrawCell(cellValue: MaybePromise<string>, info: DrawCellInfo<T>, context: CellContext, grid: ListGridAPI<T>): void | Promise<void>;
    clone(): ImageColumn<T>;
    drawInternal(value: HTMLImageElement, context: CellContext, style: ImageStyle, helper: GridCanvasHelperAPI, _grid: ListGridAPI<T>, { drawCellBase }: DrawCellInfo<T>): void;
}
