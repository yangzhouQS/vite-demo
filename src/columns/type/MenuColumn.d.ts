import type { CellContext, ColumnMenuItemOptions, GridCanvasHelperAPI, ListGridAPI, MenuColumnOption, SimpleColumnMenuItemOption } from "../../ts-types";
import { BaseColumn } from "./BaseColumn";
import type { DrawCellInfo } from "../../ts-types-internal";
import { MenuStyle } from "../style/MenuStyle";
export declare class MenuColumn<T> extends BaseColumn<T> {
    private _options;
    constructor(option?: MenuColumnOption);
    get StyleClass(): typeof MenuStyle;
    clone(): MenuColumn<T>;
    get options(): SimpleColumnMenuItemOption[];
    withOptions(options: ColumnMenuItemOptions): MenuColumn<T>;
    drawInternal(value: unknown, context: CellContext, style: MenuStyle, helper: GridCanvasHelperAPI, _grid: ListGridAPI<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
    convertInternal(value: unknown): unknown;
    _convertInternal(value: unknown): unknown;
    getCopyCellValue(value: unknown): unknown;
}
