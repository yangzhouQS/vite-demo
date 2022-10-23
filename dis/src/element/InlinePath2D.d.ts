import type { AnyFunction, ColorDef } from "../ts-types";
import { Inline } from "./Inline";
import type { InlineDrawOption } from "./Inline";
export declare type InlinePath2DConstructorOption = {
    path: Path2D | string;
    width: number;
    height: number;
    color?: ColorDef;
};
export declare class InlinePath2D extends Inline {
    private _path;
    private _width;
    private _height;
    private _color?;
    constructor({ path, width, height, color }: InlinePath2DConstructorOption);
    width(_arg: {
        ctx: CanvasRenderingContext2D;
    }): number;
    font(): string | null;
    color(): ColorDef | null;
    canDraw(): boolean;
    onReady(_callback: AnyFunction): void;
    draw({ ctx, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }: InlineDrawOption): void;
    canBreak(): boolean;
    toString(): string;
}
