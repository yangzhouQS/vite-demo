import type { BaseStyleOption, ColorDef, ColumnStyle } from "../../ts-types";
import { EventTarget } from "../../core/EventTarget";
export declare class BaseStyle extends EventTarget implements ColumnStyle {
    private _bgColor?;
    static get EVENT_TYPE(): {
        CHANGE_STYLE: string;
    };
    static get DEFAULT(): BaseStyle;
    constructor({ bgColor }?: BaseStyleOption);
    get bgColor(): ColorDef | undefined;
    set bgColor(bgColor: ColorDef | undefined);
    doChangeStyle(): void;
    clone(): BaseStyle;
}
