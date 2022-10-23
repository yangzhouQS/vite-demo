import type { CanvasOperations } from "./internal";
export declare class PathCommands {
    readonly M: (px: number, py: number) => this;
    readonly m: (px: number, py: number) => this;
    readonly L: (px: number, py: number) => this;
    readonly l: (px: number, py: number) => this;
    readonly H: (px: number) => this;
    readonly h: (px: number) => this;
    readonly V: (py: number) => this;
    readonly v: (py: number) => this;
    readonly Z: () => this;
    readonly z: () => this;
    readonly C: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, px: number, py: number) => this;
    readonly c: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, px: number, py: number) => this;
    readonly S: (cpx: number, cpy: number, px: number, py: number) => this;
    readonly s: (cpx: number, cpy: number, px: number, py: number) => this;
    readonly Q: (cpx: number, cpy: number, px: number, py: number) => this;
    readonly q: (cpx: number, cpy: number, px: number, py: number) => this;
    readonly T: (px: number, py: number) => this;
    readonly t: (px: number, py: number) => this;
    readonly A: (rx: number, ry: number, xAxisRotation: number, largeArcFlag: number, sweepFlag: number, px: number, py: number) => this;
    readonly a: (rx: number, ry: number, xAxisRotation: number, largeArcFlag: number, sweepFlag: number, px: number, py: number) => this;
    constructor(ctx: CanvasOperations);
}
