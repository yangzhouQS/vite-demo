import type { CellAddress, EventListenerId, LayoutObjectId } from "../../ts-types";
import { Editor } from "./Editor";
import type { GridInternal } from "../../ts-types-internal";
import type { RangePasteContext } from "./BaseAction";
export declare class CheckEditor<T> extends Editor<T> {
    clone(): CheckEditor<T>;
    bindGridEvent(grid: GridInternal<T>, cellId: LayoutObjectId): EventListenerId[];
    onPasteCellRangeBox(grid: GridInternal<T>, cell: CellAddress, value: string, context: RangePasteContext): void;
    onDeleteCellRangeBox(): void;
}
