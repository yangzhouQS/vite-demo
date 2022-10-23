import type { ButtonStyleOption, ColorDef } from "../../ts-types";
import { Style } from "./Style";
export declare class ButtonStyle extends Style {
    private _buttonBgColor?;
    static get DEFAULT(): ButtonStyle;
    constructor(style?: ButtonStyleOption);
    get buttonBgColor(): ColorDef | undefined;
    set buttonBgColor(buttonBgColor: ColorDef | undefined);
    clone(): ButtonStyle;
}
