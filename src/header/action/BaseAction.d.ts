import type { BaseActionOption, EventListenerId, LayoutObjectId, ListGridAPI } from "../../ts-types";
export declare class BaseAction<T> {
    protected _disabled: boolean;
    constructor(option?: BaseActionOption);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    clone(): BaseAction<T>;
    bindGridEvent(_grid: ListGridAPI<T>, _cellId: LayoutObjectId): EventListenerId[];
    onChangeDisabledInternal(): void;
}
