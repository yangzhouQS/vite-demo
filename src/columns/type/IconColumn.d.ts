import type { CellContext, GridCanvasHelperAPI, IconColumnOption, ListGridAPI } from "../../ts-types";
import { Column } from "./Column";
import type { DrawCellInfo } from "../../ts-types-internal";
import { IconStyle } from "../style/IconStyle";
export declare class IconColumn<T> extends Column<T> {
    private _tagName?;
    private _className?;
    private _content?;
    private _name?;
    private _iconWidth?;
    constructor(option?: IconColumnOption);
    get StyleClass(): typeof IconStyle;
    clone(): IconColumn<T>;
    drawInternal(value: unknown, context: CellContext, style: IconStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
}
