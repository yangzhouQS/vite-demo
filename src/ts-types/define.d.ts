import type { ColorDef } from "./base";
import type { ListGridAPI } from "./grid-engine";
export interface FontIcon<T> {
    font?: string;
    content?: (T extends object ? keyof T : never) | string;
    className?: string;
    tagName?: string;
    isLiga?: boolean;
    width?: number;
    height?: number;
    color?: string;
}
export interface ImageIcon<T> {
    src: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export interface PathIcon<T> {
    path: (T extends object ? keyof T : never) | string;
    width: number;
    height: number;
    color?: string;
}
export interface SvgIcon<T> {
    svg: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export interface NamedIcon<T> {
    name: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export declare type ColumnIconOption<T> = FontIcon<T> | ImageIcon<T> | PathIcon<T> | SvgIcon<T> | NamedIcon<T>;
export declare type ColumnMenuItemOptions = ColumnMenuItemOption[] | SimpleColumnMenuItemOption[] | OldSimpleColumnMenuItemOption[] | string | ColumnMenuItemObjectOptions;
export interface ColumnMenuItemOption {
    value: any;
    label: string;
    classList?: string[];
    html?: string;
}
export interface SimpleColumnMenuItemOption {
    value: any;
    label: string;
}
/** @internal */
export interface OldSimpleColumnMenuItemOption {
    value: any;
    caption: string;
}
export interface ColumnMenuItemObjectOptions {
    [value: string]: string;
}
export declare type TextOverflow = "clip" | "ellipsis" | string;
export declare type LineClamp = number | "auto";
export interface StylePropertyFunctionArg {
    row: number;
    col: number;
    grid: ListGridAPI<any>;
    context: CanvasRenderingContext2D;
}
export declare type ColorPropertyDefine = ColorDef | ((args: StylePropertyFunctionArg) => string) | ((args: StylePropertyFunctionArg) => CanvasGradient) | ((args: StylePropertyFunctionArg) => CanvasPattern);
export declare type ColorsPropertyDefine = ColorPropertyDefine | (ColorDef | null)[] | ((args: StylePropertyFunctionArg) => (ColorDef | null)[]);
export declare type FontPropertyDefine = string | ((args: StylePropertyFunctionArg) => string);
