import type { ListGridAPI, MaybePromise } from "../../../ts-types";
declare type GetValueResult<T, R> = (value: string, info: {
    grid: ListGridAPI<T>;
    col: number;
    row: number;
}) => R;
declare type EditorProps<T> = {
    type?: string;
    classList?: string[];
    helperText?: string | GetValueResult<T, string>;
    inputValidator?: GetValueResult<T, MaybePromise<string>>;
    validator?: GetValueResult<T, MaybePromise<string>>;
};
declare type ActiveData<T> = {
    grid: ListGridAPI<T>;
    col: number;
    row: number;
    editor: EditorProps<T>;
};
export declare class SmallDialogInputElement<T> {
    private _handler;
    private _dialog;
    private _input;
    private _beforePropEditor?;
    private _activeData?;
    private _attaching?;
    private _beforeValue?;
    static setInputAttrs<T>(editor: EditorProps<T>, grid: ListGridAPI<T>, input: HTMLInputElement): void;
    constructor();
    dispose(): void;
    attach(grid: ListGridAPI<T>, editor: EditorProps<T>, col: number, row: number, value: string): void;
    detach(gridFocus?: boolean): void;
    _doChangeValue(): MaybePromise<boolean>;
    _isActive(): boolean;
    _bindDialogEvents(): void;
    _onKeydownEnter(e: KeyboardEvent): void;
    _onInputValue(input: HTMLInputElement, activeData?: ActiveData<T>): void;
    _onInputValueChange(after: string, activeData?: ActiveData<T>): void;
    _validate(value: string, inputOnly?: boolean): MaybePromise<boolean>;
}
export {};
