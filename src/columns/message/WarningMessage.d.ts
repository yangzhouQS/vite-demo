import type { CellContext, ColumnStyle, GridCanvasHelperAPI, ListGridAPI, MessageObject } from "../../ts-types";
import { BaseMessage } from "./BaseMessage";
import type { DrawCellInfo } from "../../ts-types-internal";
import { WarningMessageElement } from "./internal/WarningMessageElement";
export declare class WarningMessage<T> extends BaseMessage<T> {
    createMessageElementInternal(): WarningMessageElement;
    drawCellMessageInternal(_message: MessageObject, context: CellContext, style: ColumnStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, _info: DrawCellInfo<T>): void;
}
