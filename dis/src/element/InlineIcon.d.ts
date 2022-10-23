import type { AnyFunction, ColorDef } from "../ts-types";
import { Inline } from "./Inline";
import type { InlineDrawOption } from "./Inline";
export declare type InlineIconConstructorOption = {
    width?: number;
    font?: string;
    content?: string;
    color?: ColorDef;
};
export declare class InlineIcon extends Inline {
    private _icon;
    constructor(icon: InlineIconConstructorOption);
    width({ ctx }: {
        ctx: CanvasRenderingContext2D;
    }): number;
    font(): string | null;
    color(): ColorDef | null;
    canDraw(): boolean;
    onReady(callback: AnyFunction): void;
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }: InlineDrawOption): void;
    canBreak(): boolean;
    toString(): string;
}
