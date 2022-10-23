import type { BaseActionOption, CellAddress, EventListenerId, LayoutObjectId, ListGridAPI, RecordBoolean } from "../../ts-types";
export declare type RangePasteContext = {
    reject(): void;
};
export declare abstract class BaseAction<T> {
    protected _disabled: RecordBoolean;
    constructor(option?: BaseActionOption);
    abstract get editable(): boolean;
    get disabled(): RecordBoolean;
    set disabled(disabled: RecordBoolean);
    abstract clone(): BaseAction<T>;
    abstract bindGridEvent(grid: ListGridAPI<T>, cellId: LayoutObjectId): EventListenerId[];
    protected onChangeDisabledInternal(): void;
    abstract onPasteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress, value: string, context: RangePasteContext): void;
    abstract onDeleteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress): void;
}
