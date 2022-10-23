import type { ActionListener, ActionOption, CellAddress, EventListenerId, LayoutObjectId, ListGridAPI } from "../../ts-types";
import { BaseAction } from "./BaseAction";
import type { GridInternal } from "../../ts-types-internal";
export declare class Action<T> extends BaseAction<T> {
    private _action;
    constructor(option?: ActionOption);
    get editable(): boolean;
    get action(): ActionListener;
    set action(action: ActionListener);
    clone(): Action<T>;
    getState(_grid: GridInternal<T>): {
        mouseActiveCell?: CellAddress;
    };
    bindGridEvent(grid: ListGridAPI<T>, cellId: LayoutObjectId): EventListenerId[];
    onPasteCellRangeBox(): void;
    onDeleteCellRangeBox(): void;
}
