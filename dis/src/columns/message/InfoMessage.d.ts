import type { CellContext, ColumnStyle, GridCanvasHelperAPI, ListGridAPI, MessageObject } from "../../ts-types";
import { BaseMessage } from "./BaseMessage";
import type { DrawCellInfo } from "../../ts-types-internal";
import { MessageElement } from "./internal/MessageElement";
export declare class InfoMessage<T> extends BaseMessage<T> {
    createMessageElementInternal(): MessageElement;
    drawCellMessageInternal(_message: MessageObject, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, _info: DrawCellInfo<T>): void;
}
