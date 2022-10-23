import type { EventListenerId, LayoutObjectId, ListGridAPI, SortHeaderActionOption, SortOption, SortState } from "../../ts-types";
import { BaseAction } from "./BaseAction";
export declare class SortHeaderAction<T> extends BaseAction<T> {
    private _sort;
    constructor(option?: SortHeaderActionOption<T>);
    get sort(): SortOption<T>;
    set sort(sort: SortOption<T>);
    clone(): SortHeaderAction<T>;
    _executeSort(newState: SortState, grid: ListGridAPI<T>): void;
    bindGridEvent(grid: ListGridAPI<T>, cellId: LayoutObjectId): EventListenerId[];
}
