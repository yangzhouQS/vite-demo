import type { CellAddress, EditorOption, EventListenerId, LayoutObjectId, ListGridAPI } from "../../ts-types";
import { Editor } from "./Editor";
export declare abstract class BaseInputEditor<T> extends Editor<T> {
    constructor(option?: EditorOption);
    abstract clone(): BaseInputEditor<T>;
    abstract onInputCellInternal(grid: ListGridAPI<T>, cell: CellAddress, inputValue: string): void;
    abstract onOpenCellInternal(grid: ListGridAPI<T>, cell: CellAddress): void;
    abstract onChangeSelectCellInternal(grid: ListGridAPI<T>, cell: CellAddress, selected: boolean): void;
    abstract onSetInputAttrsInternal(grid: ListGridAPI<T>, cell: CellAddress, input: HTMLInputElement): void;
    abstract onGridScrollInternal(grid: ListGridAPI<T>): void;
    bindGridEvent(grid: ListGridAPI<T>, cellId: LayoutObjectId): EventListenerId[];
    onPasteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress, value: string): void;
    onDeleteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress): void;
    isSupportMultilineValue(): boolean;
}
