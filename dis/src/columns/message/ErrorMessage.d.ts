import type { CellContext, ColumnStyle, GridCanvasHelperAPI, ListGridAPI, MessageObject } from "../../ts-types";
import { BaseMessage } from "./BaseMessage";
import type { DrawCellInfo } from "../../ts-types-internal";
import { ErrorMessageElement } from "./internal/ErrorMessageElement";
export declare class ErrorMessage<T> extends BaseMessage<T> {
    createMessageElementInternal(): ErrorMessageElement;
    drawCellMessageInternal(_message: MessageObject, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, _info: DrawCellInfo<T>): void;
}
