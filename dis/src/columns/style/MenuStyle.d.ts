import type { MenuStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class MenuStyle extends Style {
    private _appearance?;
    static get DEFAULT(): MenuStyle;
    constructor(style?: MenuStyleOption);
    get appearance(): "menulist-button" | "none" | undefined;
    set appearance(appearance: "menulist-button" | "none" | undefined);
    clone(): MenuStyle;
}
