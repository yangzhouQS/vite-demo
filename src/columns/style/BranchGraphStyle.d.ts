import type { BranchGraphStyleOption, ColorDef } from "../../ts-types";
import { BaseStyle } from "./BaseStyle";
export declare class BranchGraphStyle extends BaseStyle {
    private _branchColors;
    private _margin;
    private _circleSize;
    private _branchLineWidth;
    private _mergeStyle;
    static get DEFAULT(): BranchGraphStyle;
    constructor(style?: BranchGraphStyleOption);
    get branchColors(): ColorDef | ((name: string, index: number) => ColorDef);
    set branchColors(branchColors: ColorDef | ((name: string, index: number) => ColorDef));
    get margin(): number;
    set margin(margin: number);
    get circleSize(): number;
    set circleSize(circleSize: number);
    get branchLineWidth(): number;
    set branchLineWidth(branchLineWidth: number);
    get mergeStyle(): "straight" | "bezier";
    set mergeStyle(mergeStyle: "straight" | "bezier");
    clone(): BranchGraphStyle;
}
