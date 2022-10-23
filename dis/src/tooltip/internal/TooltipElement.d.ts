import type { ListGridAPI } from "../../ts-types";
export declare class TooltipElement<T> {
    private _handler;
    private _rootElement;
    private _messageElement;
    constructor();
    dispose(): void;
    attach(grid: ListGridAPI<T>, col: number, row: number, content: string): void;
    move(grid: ListGridAPI<T>, col: number, row: number): void;
    detach(): void;
    _detach(): void;
    _attachCell(grid: ListGridAPI<T>, col: number, row: number): boolean;
}
