import type { ImageStyleOption } from "../../ts-types";
import { StdBaseStyle } from "./StdBaseStyle";
export declare class ImageStyle extends StdBaseStyle {
    private _imageSizing?;
    private _margin;
    static get DEFAULT(): ImageStyle;
    constructor(style?: ImageStyleOption);
    get imageSizing(): "keep-aspect-ratio" | undefined;
    set imageSizing(imageSizing: "keep-aspect-ratio" | undefined);
    get margin(): number;
    set margin(margin: number);
    clone(): ImageStyle;
}
