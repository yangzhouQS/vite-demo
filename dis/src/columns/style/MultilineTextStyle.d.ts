import type { LineClamp, MultilineTextStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class MultilineTextStyle extends Style {
    private _lineHeight;
    private _autoWrapText;
    private _lineClamp?;
    static get DEFAULT(): MultilineTextStyle;
    constructor(style?: MultilineTextStyleOption);
    clone(): MultilineTextStyle;
    get lineHeight(): string | number;
    set lineHeight(lineHeight: string | number);
    get lineClamp(): LineClamp | undefined;
    set lineClamp(lineClamp: LineClamp | undefined);
    get autoWrapText(): boolean;
    set autoWrapText(autoWrapText: boolean);
}
