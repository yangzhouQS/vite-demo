import type { IconStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class IconStyle extends Style {
    static get DEFAULT(): IconStyle;
    constructor(style?: IconStyleOption);
    clone(): IconStyle;
}
