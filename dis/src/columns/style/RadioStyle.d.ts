import type { ColorDef, RadioStyleOption } from "../../ts-types";
import { StdBaseStyle } from "./StdBaseStyle";
export declare class RadioStyle extends StdBaseStyle {
    private _checkColor?;
    private _uncheckBorderColor?;
    private _checkBorderColor?;
    private _uncheckBgColor?;
    private _checkBgColor?;
    static get DEFAULT(): RadioStyle;
    constructor(style?: RadioStyleOption);
    get checkColor(): ColorDef | undefined;
    set checkColor(checkColor: ColorDef | undefined);
    get uncheckBorderColor(): ColorDef | undefined;
    set uncheckBorderColor(uncheckBorderColor: ColorDef | undefined);
    get checkBorderColor(): ColorDef | undefined;
    set checkBorderColor(checkBorderColor: ColorDef | undefined);
    get uncheckBgColor(): ColorDef | undefined;
    set uncheckBgColor(uncheckBgColor: ColorDef | undefined);
    get checkBgColor(): ColorDef | undefined;
    set checkBgColor(checkBgColor: ColorDef | undefined);
    clone(): RadioStyle;
}
