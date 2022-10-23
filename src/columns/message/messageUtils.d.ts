import type { CellContext, ColorDef, GridCanvasHelperAPI } from "../../ts-types";
export declare function drawExclamationMarkBox(context: CellContext, style: {
    bgColor: ColorDef;
    color?: ColorDef;
    boxWidth?: number | string;
    markHeight?: number | string;
}, helper: GridCanvasHelperAPI): void;
export declare function drawInformationMarkBox(context: CellContext, style: {
    bgColor: ColorDef;
    color?: ColorDef;
    boxWidth?: number | string;
    markHeight?: number | string;
}, helper: GridCanvasHelperAPI): void;
