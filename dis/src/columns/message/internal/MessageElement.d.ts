import type { ListGridAPI, MessageObject } from "../../../ts-types";
export declare class MessageElement {
    private _handler;
    protected _rootElement: HTMLElement;
    protected _messageElement: HTMLElement;
    constructor();
    dispose(): void;
    attach<T>(grid: ListGridAPI<T>, col: number, row: number, message: MessageObject): void;
    move<T>(grid: ListGridAPI<T>, col: number, row: number): void;
    detach(): void;
    _detach(): void;
    _attachCell<T>(grid: ListGridAPI<T>, col: number, row: number): boolean;
}
