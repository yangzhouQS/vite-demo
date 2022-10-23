import type { CellContext, ColumnStyle, GridCanvasHelperAPI, ListGridAPI, MessageObject } from "../../ts-types";
import type { DrawCellInfo } from "../../ts-types-internal";
import type { MessageElement } from "./internal/MessageElement";
export declare abstract class BaseMessage<T> {
    private _grid;
    private _messageElement;
    constructor(grid: ListGridAPI<T>);
    dispose(): void;
    _getMessageElement(): MessageElement;
    abstract createMessageElementInternal(): MessageElement;
    abstract drawCellMessageInternal(message: MessageObject, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
    attachMessageElement(col: number, row: number, message: MessageObject): void;
    moveMessageElement(col: number, row: number): void;
    detachMessageElement(): void;
    drawCellMessage(message: MessageObject, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void;
}
