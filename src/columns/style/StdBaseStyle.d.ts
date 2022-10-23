import { BaseStyle } from "./BaseStyle";
import type { StdBaseStyleOption } from "../../ts-types";
export declare class StdBaseStyle extends BaseStyle {
    private _textAlign;
    private _textBaseline;
    static get DEFAULT(): StdBaseStyle;
    constructor(style?: StdBaseStyleOption);
    get textAlign(): CanvasTextAlign;
    set textAlign(textAlign: CanvasTextAlign);
    get textBaseline(): CanvasTextBaseline;
    set textBaseline(textBaseline: CanvasTextBaseline);
    clone(): StdBaseStyle;
}
