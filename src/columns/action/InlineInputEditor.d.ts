import type { CellAddress, InlineInputEditorOption, ListGridAPI } from "../../ts-types";
import { BaseInputEditor } from "./BaseInputEditor";
export declare class InlineInputEditor<T> extends BaseInputEditor<T> {
    private _classList?;
    private _type?;
    constructor(option?: InlineInputEditorOption);
    get classList(): string[] | undefined;
    set classList(classList: string[] | undefined);
    get type(): string | undefined;
    set type(type: string | undefined);
    clone(): InlineInputEditor<T>;
    onInputCellInternal(grid: ListGridAPI<T>, cell: CellAddress, inputValue: string): void;
    onOpenCellInternal(grid: ListGridAPI<T>, cell: CellAddress): void;
    onChangeSelectCellInternal(grid: ListGridAPI<T>, _cell: CellAddress, _selected: boolean): void;
    onGridScrollInternal(grid: ListGridAPI<T>): void;
    onChangeDisabledInternal(): void;
    onChangeReadOnlyInternal(): void;
    onSetInputAttrsInternal(grid: ListGridAPI<T>, _cell: CellAddress, input: HTMLInputElement): void;
}
