import type { ColorDef, PercentCompleteBarStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class PercentCompleteBarStyle extends Style {
    private _barColor;
    private _barBgColor;
    private _barHeight;
    static get DEFAULT(): PercentCompleteBarStyle;
    constructor(style?: PercentCompleteBarStyleOption);
    get barColor(): ColorDef | ((num: number) => ColorDef);
    set barColor(barColor: ColorDef | ((num: number) => ColorDef));
    get barBgColor(): ColorDef;
    set barBgColor(barBgColor: ColorDef);
    get barHeight(): number;
    set barHeight(barHeight: number);
    clone(): PercentCompleteBarStyle;
}
