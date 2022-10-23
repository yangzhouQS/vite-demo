import type { RectProps } from "../ts-types";
export declare type PaddingOption = {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
};
export declare function getFontSize(ctx: CanvasRenderingContext2D, font: string | null | undefined): {
    width: number;
    height: number;
};
export declare function calcBasePosition(ctx: CanvasRenderingContext2D, rect: RectProps, { offset, padding: { left: paddingLeft, right: paddingRight, top: paddingTop, bottom: paddingBottom, }, }?: {
    offset?: number;
    padding?: PaddingOption;
}): {
    x: number;
    y: number;
};
export declare function calcStartPosition(ctx: CanvasRenderingContext2D, rect: RectProps, width: number, height: number, { offset, padding: { left: paddingLeft, right: paddingRight, top: paddingTop, bottom: paddingBottom, }, }?: {
    offset?: number;
    padding?: PaddingOption;
}): {
    x: number;
    y: number;
};
