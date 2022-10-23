import type { AnyFunction, ColorDef } from "../ts-types";
import { Inline } from "./Inline";
import type { InlineDrawOption } from "./Inline";
export declare type InlineDrawerFunction = (options: InlineDrawOption) => void;
export declare class InlineDrawer extends Inline {
    private _draw;
    private _width;
    private _color?;
    constructor({ draw, width, color, }: {
        draw: InlineDrawerFunction;
        width: number;
        height: number;
        color?: ColorDef;
    });
    width(_arg: {
        ctx: CanvasRenderingContext2D;
    }): number;
    font(): string | null;
    color(): ColorDef | null;
    canDraw(): boolean;
    onReady(_callback: AnyFunction): void;
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }: InlineDrawOption): void;
    canBreak(): boolean;
    toString(): string;
}
