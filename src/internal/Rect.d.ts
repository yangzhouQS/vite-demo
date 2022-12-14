import type { RectProps } from "../ts-types";
export declare class Rect implements RectProps {
    private _left;
    private _top;
    private _width;
    private _height;
    private _right;
    private _bottom;
    constructor(left: number, top: number, width: number, height: number);
    static bounds(left: number, top: number, right: number, bottom: number): Rect;
    static max(rect1: Rect, rect2: Rect): Rect;
    get left(): number;
    set left(left: number);
    get top(): number;
    set top(top: number);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get right(): number;
    set right(right: number);
    get bottom(): number;
    set bottom(bottom: number);
    offsetLeft(offset: number): void;
    offsetTop(offset: number): void;
    copy(): Rect;
    intersection(rect: Rect): Rect | null;
    contains(another: Rect): boolean;
    inPoint(x: number, y: number): boolean;
}
