import type { ColorDef, StyleOption, TextOverflow } from "../../ts-types";
import { StdBaseStyle } from "./StdBaseStyle";
export declare class Style extends StdBaseStyle {
    private _color?;
    private _font?;
    private _padding;
    private _textOverflow;
    static get DEFAULT(): Style;
    constructor(style?: StyleOption);
    get color(): ColorDef | undefined;
    set color(color: ColorDef | undefined);
    get font(): string | undefined;
    set font(font: string | undefined);
    get padding(): number | string | (number | string)[] | undefined;
    set padding(padding: number | string | (number | string)[] | undefined);
    get textOverflow(): TextOverflow;
    set textOverflow(textOverflow: TextOverflow);
    clone(): Style;
}
