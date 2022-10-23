export declare class Scrollable {
    private _handler;
    private _scrollable;
    private _height;
    private _width;
    private _endPointElement;
    private _p;
    constructor();
    calcTop(top: number): number;
    getElement(): HTMLDivElement;
    setScrollSize(width: number, height: number): void;
    get scrollWidth(): number;
    set scrollWidth(width: number);
    get scrollHeight(): number;
    set scrollHeight(height: number);
    get scrollLeft(): number;
    set scrollLeft(scrollLeft: number);
    get scrollTop(): number;
    set scrollTop(scrollTop: number);
    onScroll(fn: (evt: Event) => void): void;
    dispose(): void;
    private _update;
}
