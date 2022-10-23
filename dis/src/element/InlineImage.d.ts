import type { AnyFunction, MaybePromise } from "../ts-types";
import { Inline } from "./Inline";
import type { InlineDrawOption } from "./Inline";
export declare type InlineImageConstructorOption = {
    src: MaybePromise<string>;
    width?: number;
    height?: number;
    imageLeft?: number;
    imageTop?: number;
    imageWidth?: number;
    imageHeight?: number;
};
export declare class InlineImage extends Inline {
    private _src;
    private _width?;
    private _height?;
    private _imageLeft?;
    private _imageTop?;
    private _imageWidth?;
    private _imageHeight?;
    private _onloaded;
    private _inlineImgPromise;
    private _inlineImg;
    constructor({ src, width, height, imageLeft, imageTop, imageWidth, imageHeight, }: InlineImageConstructorOption);
    _loadImage(src: string): void;
    width(_arg: {
        ctx: CanvasRenderingContext2D;
    }): number;
    font(): string | null;
    color(): string | null;
    canDraw(): boolean;
    onReady(callback: AnyFunction): void;
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }: InlineDrawOption): void;
    canBreak(): boolean;
    toString(): string;
}
