import type { ColorDef } from "../ts-types";
import type { PaddingOption } from "../internal/canvases";
export declare function strokeColorsRect(ctx: CanvasRenderingContext2D, borderColors: [
    ColorDef | null,
    ColorDef | null,
    ColorDef | null,
    ColorDef | null
], left: number, top: number, width: number, height: number): void;
export declare function roundRect(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number, radius: number): void;
export declare function fillRoundRect(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number, radius: number): void;
export declare function strokeRoundRect(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number, radius: number): void;
export declare function fillCircle(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number): void;
export declare function strokeCircle(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number): void;
export declare type FillTextRectOption = {
    offset?: number;
    padding?: PaddingOption;
};
export declare function fillTextRect(ctx: CanvasRenderingContext2D, text: string, left: number, top: number, width: number, height: number, { offset, padding }?: FillTextRectOption): void;
export declare type DrawInlineImageRectOption = {
    offset?: number;
    padding?: PaddingOption;
};
export declare function drawInlineImageRect(ctx: CanvasRenderingContext2D, image: CanvasImageSource, srcLeft: number, srcTop: number, srcWidth: number, srcHeight: number, destWidth: number, destHeight: number, left: number, top: number, width: number, height: number, { offset, padding }?: DrawInlineImageRectOption): void;
/**
 * Returns an object containing the width of the checkbox.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the checkbox
 * @memberof cheetahGrid.tools.canvashelper
 */
export declare function measureCheckbox(ctx: CanvasRenderingContext2D): {
    width: number;
};
/**
 * Returns an object containing the width of the radio button.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the radio button
 * @memberof cheetahGrid.tools.canvashelper
 */
export declare function measureRadioButton(ctx: CanvasRenderingContext2D): {
    width: number;
};
export declare type DrawCheckboxOption = {
    uncheckBgColor?: ColorDef;
    checkBgColor?: ColorDef;
    borderColor?: ColorDef;
    boxSize?: number;
};
/**
 * draw Checkbox
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {boolean|number} check checkbox check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */
export declare function drawCheckbox(ctx: CanvasRenderingContext2D, x: number, y: number, check: number | boolean, { uncheckBgColor, checkBgColor, borderColor, boxSize, }?: DrawCheckboxOption): void;
export declare type DrawRadioButtonOption = {
    checkColor?: ColorDef;
    borderColor?: ColorDef;
    bgColor?: ColorDef;
    boxSize?: number;
};
/**
 * draw Radio button
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {boolean|number} check radio button check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */
export declare function drawRadioButton(ctx: CanvasRenderingContext2D, x: number, y: number, check: number | boolean, { checkColor, borderColor, bgColor, boxSize, }?: DrawRadioButtonOption): void;
export declare type DrawButtonOption = {
    backgroundColor?: ColorDef;
    bgColor?: ColorDef;
    radius?: number;
    shadow?: {
        color?: string;
        blur?: number;
        offsetX?: number;
        offsetY?: number;
        offset?: {
            x?: number;
            y?: number;
        };
    };
};
/**
 * draw Button
 */
export declare function drawButton(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number, option?: DrawButtonOption): void;
export declare type Canvashelper = {
    roundRect: typeof roundRect;
    fillRoundRect: typeof fillRoundRect;
    strokeRoundRect: typeof strokeRoundRect;
    drawCheckbox: typeof drawCheckbox;
    measureCheckbox: typeof measureCheckbox;
    fillTextRect: typeof fillTextRect;
    drawButton: typeof drawButton;
    drawInlineImageRect: typeof drawInlineImageRect;
    strokeColorsRect: typeof strokeColorsRect;
};
