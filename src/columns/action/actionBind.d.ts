import type { CellAddress, EventListenerId, LayoutObjectId, ListGridAPI } from "../../ts-types";
export declare function bindCellClickAction<T>(grid: ListGridAPI<T>, cellId: LayoutObjectId, { action, mouseOver, mouseOut, }: {
    action: (cell: CellAddress) => void;
    mouseOver: (cell: CellAddress) => boolean;
    mouseOut: (cell: CellAddress) => void;
}): EventListenerId[];
export declare function bindCellKeyAction<T>(grid: ListGridAPI<T>, cellId: LayoutObjectId, { action, acceptKeys, }: {
    action: (cell: CellAddress) => void;
    acceptKeys?: number[];
}): EventListenerId[];
