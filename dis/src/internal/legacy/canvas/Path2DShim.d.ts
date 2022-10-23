import type { CanvasOperations } from "./internal";
declare type CanvasOperation = keyof CanvasOperations;
export declare class Path2DShim implements CanvasPath {
    _ops: {
        op: CanvasOperation;
        args: any[];
    }[];
    arc(...args: Parameters<typeof Path2D.prototype.arc>): void;
    arcTo(...args: Parameters<typeof Path2D.prototype.arcTo>): void;
    bezierCurveTo(...args: Parameters<typeof Path2D.prototype.bezierCurveTo>): void;
    closePath(...args: Parameters<typeof Path2D.prototype.closePath>): void;
    ellipse(...args: Parameters<typeof Path2D.prototype.ellipse>): void;
    lineTo(...args: Parameters<typeof Path2D.prototype.lineTo>): void;
    moveTo(...args: Parameters<typeof Path2D.prototype.moveTo>): void;
    quadraticCurveTo(...args: Parameters<typeof Path2D.prototype.quadraticCurveTo>): void;
    rect(...args: Parameters<typeof Path2D.prototype.rect>): void;
    constructor(arg: string | Path2DShim);
}
export {};
