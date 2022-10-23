import type { ListGridAPI } from "../../../ts-types";
declare type EditorProps = {
    type?: string;
    classList?: string[];
};
export declare class InlineInputElement<T> {
    private _handler;
    private _input;
    private _beforePropEditor?;
    private _activeData?;
    private _attaching?;
    static setInputAttrs<T>(editor: {
        type?: string;
        classList?: string[];
    }, grid: ListGridAPI<T>, input: HTMLInputElement): void;
    constructor();
    dispose(): void;
    attach(grid: ListGridAPI<T>, editor: EditorProps, col: number, row: number, value: string): void;
    detach(gridFocus?: boolean): void;
    doChangeValue(): void;
    _isActive(): boolean;
    _bindInputEvents(): void;
    _onKeydownEnter(e: KeyboardEvent): void;
    _onKeydownTab(e: KeyboardEvent): void;
}
export {};
