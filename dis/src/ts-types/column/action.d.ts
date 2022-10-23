import type { CellAddress } from "../grid";
import type { ColumnMenuItemOptions } from "../define";
import type { ListGridAPI } from "../grid-engine";
import type { MaybePromise } from "../base";
export declare type RecordBoolean<T = any> = boolean | ((record: T) => boolean);
export interface BaseActionOption {
    disabled?: RecordBoolean;
}
export declare type ActionListener = (record: any, cell: CellAddress & {
    grid: ListGridAPI<any>;
}) => void;
export interface ActionOption extends BaseActionOption {
    action?: ActionListener;
}
export interface EditorOption extends BaseActionOption {
    readOnly?: RecordBoolean;
}
export declare type ButtonActionOption = ActionOption;
export interface InlineMenuEditorOption<T> extends EditorOption {
    classList?: string | string[];
    options?: ColumnMenuItemOptions | ((record: T | undefined) => ColumnMenuItemOptions);
}
export interface InlineInputEditorOption extends EditorOption {
    classList?: string | string[];
    type?: string;
}
declare type GetValueResult<T, R> = (value: string, info: {
    grid: ListGridAPI<T>;
    col: number;
    row: number;
}) => R;
export interface SmallDialogInputEditorOption<T> extends EditorOption {
    classList?: string | string[];
    type?: string;
    helperText?: string | GetValueResult<T, string>;
    inputValidator?: GetValueResult<T, MaybePromise<string>>;
    validator?: GetValueResult<T, MaybePromise<string>>;
}
export declare type GetRadioEditorGroup<T> = (target: {
    grid: ListGridAPI<T>;
    col: number;
    row: number;
}) => CellAddress[];
export interface RadioEditorOption<T> extends EditorOption {
    /** @deprecated Use checkAction instead. */
    group?: GetRadioEditorGroup<T>;
    checkAction?: ActionListener;
}
export declare type SortOption<T> = boolean | (string & keyof T) | ((arg: {
    order: "asc" | "desc";
    col: number;
    row: number;
    grid: ListGridAPI<T>;
}) => void);
export interface SortHeaderActionOption<T> extends BaseActionOption {
    sort?: SortOption<T>;
}
export declare type ColumnActionOption = "CHECK" | "check" | "INPUT" | "input";
export declare type HeaderActionOption = "CHECK" | "check" | "SORT" | "sort";
export {};
