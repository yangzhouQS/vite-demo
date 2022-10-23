import type { CellAddress, CellRange, FieldDef } from "./grid";
import type { AnyFunction } from "./base";
import type { ColumnDefine } from "../ListGrid";
export declare type KeyboardEventListener = (e: KeyboardEvent) => void;
export declare type AnyListener = AnyFunction;
export declare type EventListenerId = number;
export declare type BeforeSelectedCellEvent = CellAddress & {
    selected: false;
    after: CellAddress;
};
export declare type AfterSelectedCellEvent = CellAddress & {
    selected: true;
    before: CellAddress;
};
export declare type SelectedCellEvent = BeforeSelectedCellEvent | AfterSelectedCellEvent;
export declare type MouseCellEvent = CellAddress & {
    event: MouseEvent;
};
export declare type TouchCellEvent = CellAddress & {
    event: TouchEvent;
};
export declare type KeydownEvent = {
    keyCode: number;
    event: KeyboardEvent;
    stopCellMoving(): void;
};
export interface PasteRangeBoxValues {
    readonly colCount: number;
    readonly rowCount: number;
    getCellValue(offsetCol: number, offsetRow: number): string;
}
export declare type PasteCellEvent = CellAddress & {
    value: string;
    normalizeValue: string;
    multi: boolean;
    rangeBoxValues: PasteRangeBoxValues;
    event: ClipboardEvent;
};
export declare type InputCellEvent = CellAddress & {
    value: string;
};
export declare type DeleteCellEvent = CellAddress & {
    event: KeyboardEvent;
};
export declare type ScrollEvent = {
    event: Event;
};
export declare type ModifyStatusEditableinputCellEvent = CellAddress & {
    input: HTMLInputElement;
};
export declare type MousePointerCellEvent = CellAddress & {
    related?: CellAddress;
};
export interface DrawGridEventHandlersEventMap {
    selected_cell: [SelectedCellEvent, boolean];
    click_cell: [MouseCellEvent];
    dblclick_cell: [MouseCellEvent];
    mouseenter_cell: [MousePointerCellEvent];
    mouseleave_cell: [MousePointerCellEvent];
    mouseover_cell: [MousePointerCellEvent];
    mouseout_cell: [MousePointerCellEvent];
    mousemove_cell: [MouseCellEvent];
    mousedown_cell: [MouseCellEvent];
    mouseup_cell: [MouseCellEvent];
    contextmenu_cell: [MouseCellEvent];
    touchstart_cell: [TouchCellEvent];
    dbltap_cell: [TouchCellEvent];
    keydown: [KeydownEvent];
    paste_cell: [PasteCellEvent];
    input_cell: [InputCellEvent];
    delete_cell: [DeleteCellEvent];
    scroll: [ScrollEvent];
    editableinput_cell: [CellAddress];
    modify_status_editableinput_cell: [ModifyStatusEditableinputCellEvent];
    focus_grid: [FocusEvent];
    blur_grid: [FocusEvent];
    resize_column: [{
        col: number;
    }];
    copydata: [CellRange];
}
export interface DrawGridEventHandlersReturnMap {
    selected_cell: void;
    click_cell: void;
    dblclick_cell: void;
    mouseenter_cell: void;
    mouseleave_cell: void;
    mouseover_cell: void;
    mouseout_cell: void;
    mousemove_cell: void;
    mousedown_cell: boolean;
    mouseup_cell: void;
    contextmenu_cell: void;
    touchstart_cell: void;
    dbltap_cell: void;
    keydown: void;
    paste_cell: void;
    input_cell: void;
    delete_cell: void;
    scroll: void;
    editableinput_cell: boolean | void;
    modify_status_editableinput_cell: void;
    focus_grid: void;
    blur_grid: void;
    resize_column: void;
    copydata: string;
}
export declare type ChangedValueCellEvent<T> = CellAddress & {
    record: T;
    field: FieldDef<T>;
    value: any;
    oldValue: any;
};
export declare type ChangedHeaderValueCellEvent = CellAddress & {
    field: string;
    value: any;
    oldValue: any;
};
export declare type PasteRejectedValuesEvent<T> = {
    detail: (CellAddress & {
        record: T | undefined;
        define: ColumnDefine<T>;
        pasteValue: string;
    })[];
};
export interface ListGridEventHandlersEventMap<T> extends DrawGridEventHandlersEventMap {
    changed_value: [ChangedValueCellEvent<T>];
    changed_header_value: [ChangedHeaderValueCellEvent];
    rejected_paste_values: [PasteRejectedValuesEvent<T>];
}
export interface ListGridEventHandlersReturnMap extends DrawGridEventHandlersReturnMap {
    changed_value: void;
    changed_header_value: void;
    rejected_paste_values: void;
}
