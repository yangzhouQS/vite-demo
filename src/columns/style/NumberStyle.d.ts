import type { NumberStyleOption } from "../../ts-types";
import { Style } from "./Style";
export declare class NumberStyle extends Style {
    static get DEFAULT(): NumberStyle;
    constructor(style?: NumberStyleOption);
    clone(): NumberStyle;
}
