import type { CellAddress, CellContext, CellRange, DrawGridAPI, DrawGridEventHandlersEventMap, DrawGridEventHandlersReturnMap, DrawGridKeyboardOptions, EventListenerId, KeyboardEventListener, KeydownEvent } from "../ts-types";
import { DG_EVENT_TYPE } from "./DG_EVENT_TYPE";
import { EventHandler } from "../internal/EventHandler";
import { EventTarget } from "./EventTarget";
import { NumberMap } from "../internal/NumberMap";
import { Rect } from "../internal/Rect";
import { Scrollable } from "../internal/Scrollable";
/**
 * managing mouse down moving
 * @private
 */
declare class BaseMouseDownMover {
    protected _grid: DrawGrid;
    private _handler;
    private _events;
    private _started;
    private _moved;
    private _mouseEndPoint?;
    constructor(grid: DrawGrid);
    moving(_e: MouseEvent | TouchEvent): boolean;
    lastMoving(e: MouseEvent | TouchEvent): boolean;
    protected _bindMoveAndUp(e: MouseEvent | TouchEvent): void;
    private _mouseMove;
    protected _moveInternal(_e: MouseEvent | TouchEvent): boolean;
    private _mouseUp;
    protected _upInternal(_e: MouseEvent | TouchEvent): void;
    dispose(): void;
}
/**
 * managing cell selection operation with mouse
 * @private
 */
declare class CellSelector extends BaseMouseDownMover {
    private _cell?;
    start(e: MouseEvent | TouchEvent): void;
    select(e: MouseEvent | TouchEvent): void;
    protected _moveInternal(e: MouseEvent | TouchEvent): boolean;
    private _getTargetCell;
}
/**
 * managing row width changing operation with mouse
 * @private
 */
declare class ColumnResizer extends BaseMouseDownMover {
    private _targetCol;
    private _x;
    private _preX;
    private _invalidateAbsoluteLeft;
    constructor(grid: DrawGrid);
    start(col: number, e: MouseEvent | TouchEvent): void;
    protected _moveInternal(e: MouseEvent | TouchEvent): boolean;
    protected _upInternal(_e: MouseEvent | TouchEvent): void;
}
/**
 * Manage focus
 * @private
 */
declare class FocusControl extends EventTarget {
    private _grid;
    private _scrollable;
    private _handler;
    private _input;
    private _isComposition?;
    private _compositionEnd?;
    private _inputStatus?;
    private _keyDownMoveCallback?;
    constructor(grid: DrawGrid, parentElement: HTMLElement, scrollable: Scrollable, selection: Selection);
    fireKeyDownMove(keyCode: number, e: KeyboardEvent): void;
    onKeyDownMove(fn: KeyboardEventListener): void;
    onKeyDown(fn: (e: KeydownEvent) => void): EventListenerId;
    onInput(fn: (value: string) => void): EventListenerId;
    onDelete(fn: (e: KeyboardEvent) => void): EventListenerId;
    onCopy(fn: (e: ClipboardEvent) => void): EventListenerId;
    onPaste(fn: (e: {
        value: string;
        event: ClipboardEvent;
    }) => void): EventListenerId;
    onFocus(fn: (e: FocusEvent) => void): EventListenerId;
    onBlur(fn: (e: FocusEvent) => void): EventListenerId;
    focus(): void;
    setFocusRect(rect: Rect): void;
    get editMode(): boolean;
    set editMode(editMode: boolean);
    resetInputStatus(): void;
    storeInputStatus(): void;
    setDefaultInputStatus(): void;
    get input(): HTMLInputElement;
    dispose(): void;
}
/**
 * Selected area management
 */
declare class Selection extends EventTarget {
    private _grid;
    private _sel;
    private _focus;
    private _start;
    private _end;
    private _isWraped?;
    constructor(grid: DrawGrid);
    get range(): CellRange;
    set range(range: CellRange);
    get focus(): CellAddress;
    get select(): CellAddress;
    set select(cell: CellAddress);
    private _setSelectCell;
    _setFocusCell(col: number, row: number, keepSelect: boolean, ignoreBeforeHook?: boolean): void;
    private _wrapFireSelectedEvent;
    _updateGridRange(): boolean;
    private _callBeforeHooks;
}
/** @private */
declare type DrawLayerFunction = (ctx: CanvasRenderingContext2D) => void;
/**
 * This class manages the drawing process for each layer
 */
/** @private */
declare class DrawLayers {
    private _layers;
    constructor();
    addDraw(level: number, fn: DrawLayerFunction): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
/**
 * Context of cell drawing
 * @private
 */
declare class DrawCellContext implements CellContext {
    private _col;
    private _row;
    private _mode;
    private _ctx;
    private _rect;
    private _drawRect;
    private _drawing;
    private _selection;
    private _drawLayers;
    private _childContexts;
    private _cancel?;
    private _grid?;
    private _onTerminate?;
    private _rectFilter;
    /**
     * constructor
     * @param {number} col index of column
     * @param {number} row index of row
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Rect} rect rect of cell area
     * @param {Rect} drawRect rect of drawing area
     * @param {boolean} drawing `true` if drawing is in progress
     * @param {object} selection the selection
     * @param {Array} drawLayers array of draw layers
     * @private
     */
    constructor(col: number, row: number, ctx: CanvasRenderingContext2D, rect: Rect | null, drawRect: Rect | null, drawing: boolean, selection: Selection, drawLayers: DrawLayers);
    get drawing(): boolean;
    get row(): number;
    get col(): number;
    cancel(): void;
    /**
     * select status.
     * @return {object} select status
     */
    getSelection(): {
        select: CellAddress;
        range: CellRange;
    };
    /**
     * Canvas context.
     * @return {CanvasRenderingContext2D} Canvas context.
     */
    getContext(): CanvasRenderingContext2D;
    /**
     * Rectangle of cell.
     * @return {Rect} rect Rectangle of cell.
     */
    getRect(): Rect;
    setRectFilter(rectFilter: (base: Rect) => Rect): void;
    /**
     * Rectangle of Drawing range.
     * @return {Rect} Rectangle of Drawing range.
     */
    getDrawRect(): Rect | null;
    private _isOutOfRange;
    /**
     * get Context of current state
     * @return {DrawCellContext} current DrawCellContext.
     */
    toCurrentContext(): DrawCellContext;
    addLayerDraw(level: number, fn: DrawLayerFunction): void;
    private _toRelativeDrawRect;
    _delayMode(grid: DrawGrid, onTerminate: () => void): void;
    /**
     * terminate
     * @return {void}
     */
    terminate(): void;
    private _getRectInternal;
}
/** @protected */
interface DrawGridProtected {
    element: HTMLElement;
    scrollable: Scrollable;
    handler: EventHandler;
    selection: Selection;
    focusControl: FocusControl;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    rowCount: number;
    colCount: number;
    frozenColCount: number;
    frozenRowCount: number;
    defaultRowHeight: number;
    defaultColWidth: string | number;
    font?: string;
    underlayBackgroundColor?: string;
    keyboardOptions?: DrawGridKeyboardOptions;
    disableColumnResize?: boolean;
    trimOnPaste: boolean;
    rowHeightsMap: NumberMap<number>;
    colWidthsMap: NumberMap<string | number>;
    colWidthsLimit: {
        [col: number]: {
            max?: string | number;
            min?: string | number;
        };
    };
    calcWidthContext: {
        _: DrawGridProtected;
        full: number;
        em: number;
    };
    columnResizer: ColumnResizer;
    cellSelector: CellSelector;
    drawCells: {
        [row: number]: {
            [col: number]: DrawCellContext;
        };
    };
    cellTextOverflows: {
        [at: string]: string;
    };
    focusedGrid: boolean;
    config: {
        [name: string]: any;
    } | undefined;
    scroll: {
        left: number;
        top: number;
    };
    disposables?: {
        dispose(): void;
    }[] | null;
}
export { DrawGridProtected };
export interface DrawGridConstructorOptions {
    rowCount?: number;
    colCount?: number;
    frozenColCount?: number;
    frozenRowCount?: number;
    /**
     * Default grid row height. default 40
     */
    defaultRowHeight?: number;
    /**
     * Default grid col width. default 80
     */
    defaultColWidth?: string | number;
    font?: string;
    underlayBackgroundColor?: string;
    keyboardOptions?: DrawGridKeyboardOptions;
    /**
     * Canvas parent element
     */
    parentElement?: HTMLElement | null;
    /**
     * Disable column resizing
     */
    disableColumnResize?: boolean;
    /**
     * If set to true, trim the pasted text on pasting.
     */
    trimOnPaste?: boolean;
}
/** @private */
declare const protectedKey: "$$$$protected symbol$$$$";
/**
 * DrawGrid
 * @classdesc cheetahGrid.core.DrawGrid
 * @memberof cheetahGrid.core
 */
export declare abstract class DrawGrid extends EventTarget implements DrawGridAPI {
    protected [protectedKey]: DrawGridProtected;
    static get EVENT_TYPE(): typeof DG_EVENT_TYPE;
    constructor(options?: DrawGridConstructorOptions);
    /**
     * Get root element.
     * @returns {HTMLElement} root element
     */
    getElement(): HTMLElement;
    /**
     * Get canvas element.
     */
    get canvas(): HTMLCanvasElement;
    /**
     * Focus the grid.
     * @return {void}
     */
    focus(): void;
    hasFocusGrid(): boolean;
    /**
     * Get the selection instance.
     */
    get selection(): Selection;
    /**
     * Get the number of rows.
     */
    get rowCount(): number;
    /**
     * Set the number of rows.
     */
    set rowCount(rowCount: number);
    /**
     * Get the number of columns.
     */
    get colCount(): number;
    /**
     * Set the number of columns.
     */
    set colCount(colCount: number);
    /**
     * Get the number of frozen columns.
     */
    get frozenColCount(): number;
    /**
     * Set the number of frozen columns.
     */
    set frozenColCount(frozenColCount: number);
    /**
     * Get the number of frozen rows.
     */
    get frozenRowCount(): number;
    /**
     * Set the number of frozen rows.
     */
    set frozenRowCount(frozenRowCount: number);
    /**
     * Get the default row height.
     *
     */
    get defaultRowHeight(): number;
    /**
     * Set the default row height.
     */
    set defaultRowHeight(defaultRowHeight: number);
    /**
     * Get the default column width.
     */
    get defaultColWidth(): string | number;
    /**
     * Set the default column width.
     */
    set defaultColWidth(defaultColWidth: string | number);
    /**
     * Get the font definition as a string.
     */
    get font(): string | undefined;
    /**
     * Set the font definition with the given string.
     */
    set font(font: string | undefined);
    /**
     * Get the background color of the underlay.
     */
    get underlayBackgroundColor(): string | undefined;
    /**
     * Set the background color of the underlay.
     */
    set underlayBackgroundColor(underlayBackgroundColor: string | undefined);
    /**
     * If set to true, trim the pasted text on pasting.
     */
    get trimOnPaste(): boolean;
    set trimOnPaste(trimOnPaste: boolean);
    get keyboardOptions(): DrawGridKeyboardOptions | null;
    set keyboardOptions(keyboardOptions: DrawGridKeyboardOptions | null);
    configure(name: "fadeinWhenCallbackInPromise", value?: boolean): boolean;
    /**
     * Apply the changed size.
     * @return {void}
     */
    updateSize(): void;
    /**
     * Apply the changed scroll size.
     * @return {boolean} `true` if there was a change in the scroll size
     */
    updateScroll(): boolean;
    /**
     * Get the row height of the given the row index.
     * @param  {number} row The row index
     * @return {number} The row height
     */
    getRowHeight(row: number): number;
    /**
     * Set the row height of the given the row index.
     * @param  {number} row The row index
     * @param  {number} height The row height
     * @return {void}
     */
    setRowHeight(row: number, height: number | null): void;
    /**
     * Get the column width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column width
     */
    getColWidth(col: number): number;
    /**
     * Set the column widtht of the given the column index.
     * @param  {number} col The column index
     * @param  {number} width The column width
     * @return {void}
     */
    setColWidth(col: number, width: string | number | null): void;
    /**
     * Get the column max width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column max width
     */
    getMaxColWidth(col: number): string | number | undefined;
    /**
     * Set the column max widtht of the given the column index.
     * @param  {number} col The column index
     * @param  {number} maxwidth The column max width
     * @return {void}
     */
    setMaxColWidth(col: number, maxwidth: string | number | null): void;
    /**
     * Get the column min width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column min width
     */
    getMinColWidth(col: number): string | number | undefined;
    /**
     * Set the column min widtht of the given the column index.
     * @param  {number} col The column index
     * @param  {number} minwidth The column min width
     * @return {void}
     */
    setMinColWidth(col: number, minwidth: string | number | null): void;
    /**
     * Get the rect of the cell.
     * @param {number} col index of column, of the cell
     * @param {number} row index of row, of the cell
     * @returns {Rect} the rect of the cell.
     */
    getCellRect(col: number, row: number): Rect;
    /**
     * Get the relative rectangle of the cell.
     * @param {number} col index of column, of the cell
     * @param {number} row index of row, of the cell
     * @returns {Rect} the rect of the cell.
     */
    getCellRelativeRect(col: number, row: number): Rect;
    /**
     * Get the rectangle of the cells area.
     * @param {number} startCol index of the starting column, of the cell
     * @param {number} startRow index of the starting row, of the cell
     * @param {number} endCol index of the ending column, of the cell
     * @param {number} endRow index of the ending row, of the cell
     * @returns {Rect} the rect of the cells.
     */
    getCellsRect(startCol: number, startRow: number, endCol: number, endRow: number): Rect;
    getCellRangeRect(range: CellRange): Rect;
    isFrozenCell(col: number, row: number): {
        row: boolean;
        col: boolean;
    } | null;
    getRowAt(absoluteY: number): number;
    getColAt(absoluteX: number): number;
    getCellAt(absoluteX: number, absoluteY: number): CellAddress;
    /**
     * Scroll to where cell is visible.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    makeVisibleCell(col: number, row: number): void;
    /**
     * Moves the focus cursor to the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    setFocusCursor(col: number, row: number): void;
    /**
     * Focus the cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    focusCell(col: number, row: number): void;
    /**
     * Redraws the range of the given cell.
     * @param  {number} col The column index of cell.
     * @param  {number} row The row index of cell.
     * @return {void}
     */
    invalidateCell(col: number, row: number): void;
    /**
     * Redraws the range of the given cells.
     * @param {number} startCol index of the starting column, of the cell
     * @param {number} startRow index of the starting row, of the cell
     * @param {number} endCol index of the ending column, of the cell
     * @param {number} endRow index of the ending row, of the cell
     * @return {void}
     */
    invalidateGridRect(startCol: number, startRow: number, endCol?: number, endRow?: number): void;
    invalidateCellRange(range: CellRange): void;
    /**
     * Redraws the whole grid.
     * @return {void}
     */
    invalidate(): void;
    /**
     * Get the number of scrollable rows fully visible in the grid. visibleRowCount does not include the frozen rows counted by the frozenRowCount property. It does not include any partially visible rows on the bottom of the grid.
     * @returns {number}
     */
    get visibleRowCount(): number;
    /**
     * Get the number of scrollable columns fully visible in the grid. visibleColCount does not include the frozen columns counted by the frozenColCount property. It does not include any partially visible columns on the right of the grid.
     * @returns {number}
     */
    get visibleColCount(): number;
    /**
     * Get the index of the first row in the scrollable region that is visible.
     * @returns {number}
     */
    get topRow(): number;
    /**
     * Get the index of the first column in the scrollable region that is visible.
     * @returns {number}
     */
    get leftCol(): number;
    /**
     * gets or sets the number of pixels that an element's content is scrolled vertically
     */
    get scrollTop(): number;
    set scrollTop(scrollTop: number);
    /**
     * gets or sets the number of pixels that an element's content is scrolled from its left edge
     */
    get scrollLeft(): number;
    set scrollLeft(scrollLeft: number);
    /**
     * Get the value of cell with the copy action.
     * <p>
     * Please implement
     * </p>
     *
     * @protected
     * @param col Column index of cell.
     * @param row Row index of cell.
     * @param range Copy range.
     * @return {string} the value of cell
     */
    protected getCopyCellValue(_col: number, _row: number, _range: CellRange): unknown;
    /**
     * Draw a cell
     * <p>
     * Please implement cell drawing.
     * </p>
     *
     * @protected
     * @param  {number} col Column index of cell.
     * @param  {number} row Row index of cell.
     * @param  {DrawCellContext} context context of cell drawing.
     * @return {void}
     */
    protected abstract onDrawCell(col: number, row: number, context: CellContext): Promise<void> | void;
    /**
     * Get the overflowed text in the cell rectangle, from the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {string | null} The text overflowing the cell rect.
     */
    getCellOverflowText(col: number, row: number): string | null;
    /**
     * Set the overflowed text in the cell rectangle, to the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @param  {string} overflowText The overflowed text in the cell rectangle.
     * @return {void}
     */
    setCellOverflowText(col: number, row: number, overflowText: string | false): void;
    addDisposable(disposable: {
        dispose(): void;
    }): void;
    /**
     * Dispose the grid instance.
     * @returns {void}
     */
    dispose(): void;
    getAttachCellsArea(range: CellRange): {
        element: HTMLElement;
        rect: Rect;
    };
    onKeyDownMove(evt: KeyboardEvent): void;
    protected bindEventsInternal(): void;
    protected getTargetRowAtInternal(_absoluteY: number): {
        row: number;
        top: number;
    } | void;
    protected getRowsHeightInternal(_startRow: number, _endRow: number): number | void;
    protected getRowHeightInternal(_row: number): number | void;
    protected getScrollHeightInternal(_row?: number): number | void;
    protected getMoveLeftColByKeyDownInternal({ col }: CellAddress): number;
    protected getMoveRightColByKeyDownInternal({ col }: CellAddress): number;
    protected getMoveUpRowByKeyDownInternal({ row }: CellAddress): number;
    protected getMoveDownRowByKeyDownInternal({ row }: CellAddress): number;
    protected getOffsetInvalidateCells(): number;
    protected getCopyRangeInternal(range: CellRange): CellRange;
    protected _getInitContext(): CanvasRenderingContext2D;
    fireListeners<TYPE extends keyof DrawGridEventHandlersEventMap>(type: TYPE, ...event: DrawGridEventHandlersEventMap[TYPE]): DrawGridEventHandlersReturnMap[TYPE][];
}
