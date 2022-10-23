import type { MessageHandler as Base, DrawCellInfo } from "../../ts-types-internal";
import type { CellContext, ColumnStyle, GridCanvasHelperAPI, ListGridAPI, Message } from "../../ts-types";
import type { BaseMessage } from "./BaseMessage";
export declare function hasMessage(message: Message): boolean;
export declare class MessageHandler<T> implements Base<T> {
    private _grid;
    private _messageInstances;
    private _attachInfo;
    constructor(grid: ListGridAPI<T>, getMessage: (col: number, row: number) => Message);
    dispose(): void;
    drawCellMessage(message: Message, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
    _attach(col: number, row: number, message: Message): void;
    _move(col: number, row: number): void;
    _detach(): void;
    _bindGridEvent(grid: ListGridAPI<T>, getMessage: (col: number, row: number) => Message): void;
    _getMessageInstanceOfMessage(message: Message): BaseMessage<T>;
}
