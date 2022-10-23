import type { CheckStyleOption, ColorDef } from "../../ts-types";
import { StdBaseStyle } from "./StdBaseStyle";
export declare class CheckStyle extends StdBaseStyle {
    private _uncheckBgColor?;
    private _checkBgColor?;
    private _borderColor?;
    static get DEFAULT(): CheckStyle;
    constructor(style?: CheckStyleOption);
    get uncheckBgColor(): ColorDef | undefined;
    set uncheckBgColor(uncheckBgColor: ColorDef | undefined);
    get checkBgColor(): ColorDef | undefined;
    set checkBgColor(checkBgColor: ColorDef | undefined);
    get borderColor(): ColorDef | undefined;
    set borderColor(borderColor: ColorDef | undefined);
    clone(): CheckStyle;
}
