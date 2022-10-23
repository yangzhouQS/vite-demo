import type { LineClamp, MultilineTextHeaderStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class MultilineTextHeaderStyle extends Style {
    private _lineHeight;
    private _autoWrapText;
    private _lineClamp?;
    static get DEFAULT(): MultilineTextHeaderStyle;
    constructor(style?: MultilineTextHeaderStyleOption);
    clone(): MultilineTextHeaderStyle;
    get lineHeight(): string | number;
    set lineHeight(lineHeight: string | number);
    get lineClamp(): LineClamp | undefined;
    set lineClamp(lineClamp: LineClamp | undefined);
    get autoWrapText(): boolean;
    set autoWrapText(autoWrapText: boolean);
}
