import type { AnyFunction, ColorDef, InlineAPI, RectProps } from "../ts-types";
import type { Canvashelper } from "../tools/canvashelper";
export declare type InlineDrawOption = {
    ctx: CanvasRenderingContext2D;
    canvashelper: Canvashelper;
    rect: RectProps;
    offset: number;
    offsetLeft: number;
    offsetRight: number;
    offsetTop: number;
    offsetBottom: number;
};
export declare class Inline implements InlineAPI {
    private _content;
    constructor(content?: string);
    width({ ctx }: {
        ctx: CanvasRenderingContext2D;
    }): number;
    font(): string | null;
    color(): ColorDef | null;
    canDraw(): boolean;
    onReady(_callback: AnyFunction): void;
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }: InlineDrawOption): void;
    canBreak(): boolean;
    splitIndex(index: number): {
        before: Inline | null;
        after: Inline | null;
    };
    breakWord(ctx: CanvasRenderingContext2D, width: number): {
        before: Inline | null;
        after: Inline | null;
    };
    breakAll(ctx: CanvasRenderingContext2D, width: number): {
        before: Inline | null;
        after: Inline | null;
    };
    toString(): string;
}
