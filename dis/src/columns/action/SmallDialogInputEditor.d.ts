import type { CellAddress, ListGridAPI, MaybePromise, SmallDialogInputEditorOption } from "../../ts-types";
import { BaseInputEditor } from "./BaseInputEditor";
declare type GetValueResult<T, R> = (value: string, info: {
    grid: ListGridAPI<T>;
    col: number;
    row: number;
}) => R;
export declare class SmallDialogInputEditor<T> extends BaseInputEditor<T> {
    private _helperText?;
    private _inputValidator?;
    private _validator?;
    private _classList?;
    private _type?;
    constructor(option?: SmallDialogInputEditorOption<T>);
    dispose(): void;
    get classList(): string[] | undefined;
    set classList(classList: string[] | undefined);
    get type(): string | undefined;
    set type(type: string | undefined);
    get helperText(): string | GetValueResult<T, string> | undefined;
    get inputValidator(): GetValueResult<T, MaybePromise<string>> | undefined;
    get validator(): GetValueResult<T, MaybePromise<string>> | undefined;
    clone(): SmallDialogInputEditor<T>;
    onInputCellInternal(grid: ListGridAPI<T>, cell: CellAddress, inputValue: string): void;
    onOpenCellInternal(grid: ListGridAPI<T>, cell: CellAddress): void;
    onChangeSelectCellInternal(_grid: ListGridAPI<T>, _cell: CellAddress, _selected: boolean): void;
    onGridScrollInternal(_grid: ListGridAPI<T>): void;
    onChangeDisabledInternal(): void;
    onChangeReadOnlyInternal(): void;
    onSetInputAttrsInternal(grid: ListGridAPI<T>, _cell: CellAddress, input: HTMLInputElement): void;
}
export {};
