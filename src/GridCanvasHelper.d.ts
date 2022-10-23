import type { CellContext, ColorDef, ColorPropertyDefine, ColorsPropertyDefine, FontPropertyDefine, GridCanvasHelperAPI, LineClamp, ListGridAPI, RectProps, RequiredThemeDefine, TextOverflow } from "./ts-types";
import type { Inline } from "./element/Inline";
import { InlineDrawer } from "./element/InlineDrawer";
import type { SimpleColumnIconOption } from "./ts-types-internal";
declare type ColorsDef = ColorDef | (ColorDef | null)[];
export declare class GridCanvasHelper<T> implements GridCanvasHelperAPI {
    private _grid;
    private _theme;
    constructor(grid: ListGridAPI<T>);
    createCalculator(context: CellContext, font: string | undefined): {
        calcWidth(width: number | string): number;
        calcHeight(height: number | string): number;
    };
    getColor(color: ColorPropertyDefine, col: number, row: number, ctx: CanvasRenderingContext2D): ColorDef;
    getColor(color: ColorsPropertyDefine, col: number, row: number, ctx: CanvasRenderingContext2D): ColorsDef;
    toBoxArray(obj: ColorsDef): [ColorDef | null, ColorDef | null, ColorDef | null, ColorDef | null];
    toBoxPixelArray(value: number | string | (number | string)[], context: CellContext, font: string | undefined): [number, number, number, number];
    get theme(): RequiredThemeDefine;
    drawWithClip(context: CellContext, draw: (ctx: CanvasRenderingContext2D) => void): void;
    drawBorderWithClip(context: CellContext, draw: (ctx: CanvasRenderingContext2D) => void): void;
    text(text: string | (Inline | string)[], context: CellContext, { padding, offset, color, textAlign, textBaseline, font, textOverflow, icons, trailingIcon, }?: {
        padding?: number | string | (number | string)[];
        offset?: number;
        color?: ColorPropertyDefine;
        textAlign?: CanvasTextAlign;
        textBaseline?: CanvasTextBaseline;
        font?: FontPropertyDefine;
        textOverflow?: TextOverflow;
        icons?: SimpleColumnIconOption[];
        trailingIcon?: SimpleColumnIconOption;
    }): void;
    multilineText(multilines: string[], context: CellContext, { padding, offset, color, textAlign, textBaseline, font, lineHeight, autoWrapText, lineClamp, textOverflow, icons, trailingIcon, }?: {
        padding?: number | string | (number | string)[];
        offset?: number;
        color?: ColorPropertyDefine;
        textAlign?: CanvasTextAlign;
        textBaseline?: CanvasTextBaseline;
        font?: FontPropertyDefine;
        lineHeight?: string | number;
        autoWrapText?: boolean;
        lineClamp?: LineClamp;
        textOverflow?: TextOverflow;
        icons?: SimpleColumnIconOption[];
        trailingIcon?: SimpleColumnIconOption;
    }): void;
    fillText(text: string, x: number, y: number, context: CellContext, { color, textAlign, textBaseline, font, }?: {
        color?: ColorPropertyDefine;
        textAlign?: CanvasTextAlign;
        textBaseline?: CanvasTextBaseline;
        font?: FontPropertyDefine;
    }): void;
    fillCell(context: CellContext, { fillColor, }?: {
        fillColor?: ColorPropertyDefine;
    }): void;
    fillCellWithState(context: CellContext, option?: {
        fillColor?: ColorPropertyDefine;
    }): void;
    fillRect(rect: RectProps, context: CellContext, { fillColor, }?: {
        fillColor?: ColorPropertyDefine;
    }): void;
    fillRectWithState(rect: RectProps, context: CellContext, option?: {
        fillColor?: ColorPropertyDefine;
    }): void;
    getFillColorState(context: CellContext, option?: {
        fillColor?: ColorPropertyDefine;
    }): ColorPropertyDefine;
    border(context: CellContext, { borderColor, lineWidth, }?: {
        borderColor?: ColorsPropertyDefine;
        lineWidth?: number;
    }): void;
    borderWithState(context: CellContext, option?: {
        borderColor?: ColorsPropertyDefine;
        lineWidth?: number;
    }): void;
    buildCheckBoxInline(check: boolean, context: CellContext, option?: Parameters<GridCanvasHelperAPI["buildCheckBoxInline"]>[2]): InlineDrawer;
    checkbox(check: boolean, context: CellContext, { animElapsedTime, offset, uncheckBgColor, checkBgColor, borderColor, textAlign, textBaseline, }?: Parameters<GridCanvasHelperAPI["checkbox"]>[2]): void;
    radioButton(check: boolean, context: CellContext, { animElapsedTime, offset, checkColor, uncheckBorderColor, checkBorderColor, uncheckBgColor, checkBgColor, textAlign, textBaseline, }?: Parameters<GridCanvasHelperAPI["radioButton"]>[2]): void;
    button(caption: string, context: CellContext, { bgColor, padding, offset, color, textAlign, textBaseline, shadow, font, textOverflow, icons, }?: Parameters<GridCanvasHelperAPI["button"]>[2]): void;
    testFontLoad(font: string | undefined, value: string, context: CellContext): boolean;
}
export {};
