import type { ColorDef, SortHeaderStyleOption } from "../../ts-types";
import { MultilineTextHeaderStyle } from "./MultilineTextHeaderStyle";
export declare class SortHeaderStyle extends MultilineTextHeaderStyle {
    private _sortArrowColor?;
    private _multiline?;
    static get DEFAULT(): SortHeaderStyle;
    constructor(style?: SortHeaderStyleOption);
    get sortArrowColor(): ColorDef | undefined;
    set sortArrowColor(sortArrowColor: ColorDef | undefined);
    get multiline(): boolean;
    set multiline(multiline: boolean);
    clone(): SortHeaderStyle;
}
