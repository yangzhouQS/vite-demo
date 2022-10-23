import type { CanvasOperations } from "./internal";
import { PathCommands } from "./PathCommands";
declare type PathCommandName = keyof PathCommands;
declare type CanvasOperation = keyof CanvasOperations;
export declare class PathCommandsParser implements CanvasOperations {
    readonly moveTo: typeof CanvasRenderingContext2D.prototype.moveTo;
    readonly lineTo: typeof CanvasRenderingContext2D.prototype.lineTo;
    readonly closePath: typeof CanvasRenderingContext2D.prototype.closePath;
    readonly bezierCurveTo: typeof CanvasRenderingContext2D.prototype.bezierCurveTo;
    readonly quadraticCurveTo: typeof CanvasRenderingContext2D.prototype.quadraticCurveTo;
    readonly save: typeof CanvasRenderingContext2D.prototype.save;
    readonly translate: typeof CanvasRenderingContext2D.prototype.translate;
    readonly rotate: typeof CanvasRenderingContext2D.prototype.rotate;
    readonly scale: typeof CanvasRenderingContext2D.prototype.scale;
    readonly arc: typeof CanvasRenderingContext2D.prototype.arc;
    readonly restore: typeof CanvasRenderingContext2D.prototype.restore;
    readonly arcTo: typeof CanvasRenderingContext2D.prototype.arcTo;
    readonly ellipse: typeof CanvasRenderingContext2D.prototype.ellipse;
    readonly rect: typeof CanvasRenderingContext2D.prototype.rect;
    private readonly _commands;
    private _ops;
    constructor();
    command(name: PathCommandName, ...args: any[]): void;
    parse(d: string): {
        op: CanvasOperation;
        args: any[];
    }[];
}
export {};
