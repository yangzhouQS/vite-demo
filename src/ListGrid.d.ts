import { DataSource } from "./data";
import type { CellAddress, CellContext, CellRange, ColumnTypeAPI, EventListenerId, FieldDef, HeaderValues, LayoutObjectId, ListGridAPI, ListGridEventHandlersEventMap, ListGridEventHandlersReturnMap, MaybePromise, MaybePromiseOrUndef, SetPasteValueTestData, SortState, ThemeDefine } from "./ts-types";
import { ColumnDefine, GroupHeaderDefine, HeaderDefine, HeadersDefine } from "./list-grid/layout-map";
import type { DrawGridConstructorOptions, DrawGridProtected } from "./core/DrawGrid";
import type { LayoutDefine, LayoutMapAPI } from "./list-grid/layout-map";
import { MessageHandler } from "./columns/message/MessageHandler";
import { DrawGrid } from "./core/DrawGrid";
import { GridCanvasHelper } from "./GridCanvasHelper";
import { LG_EVENT_TYPE } from "./list-grid/LG_EVENT_TYPE";
import type { Theme } from "./themes/theme";
import { TooltipHandler } from "./tooltip/TooltipHandler";
/** @private */
declare const _: "$$$$protected symbol$$$$";
/** @protected */
interface ListGridProtected<T> extends DrawGridProtected {
    dataSourceEventIds?: EventListenerId[];
    headerEvents?: EventListenerId[];
    layoutMap: LayoutMapAPI<T>;
    headerValues?: HeaderValues;
    tooltipHandler: TooltipHandler<T>;
    messageHandler: MessageHandler<T>;
    theme: Theme | null;
    headerRowHeight: number[] | number;
    header: HeadersDefine<T>;
    layout: LayoutDefine<T>;
    gridCanvasHelper: GridCanvasHelper<T>;
    sortState: SortState;
    dataSource: DataSource<T>;
    records?: T[] | null;
    allowRangePaste: boolean;
}
export { ListGridProtected };
export interface ListGridConstructorOptions<T> extends DrawGridConstructorOptions {
    /**
     * Simple header property
     */
    header?: HeadersDefine<T>;
    /**
     * Layout property
     */
    layout?: LayoutDefine<T>;
    /**
     * Header row height(s)
     */
    headerRowHeight?: number[] | number;
    /**
     * Records data source
     */
    dataSource?: DataSource<T>;
    /**
     * Simple records data
     */
    records?: T[];
    /**
     * Theme
     */
    theme?: ThemeDefine | string;
    /**
     * If set to true to allow pasting of ranges. default false
     */
    allowRangePaste?: boolean;
    /**
     * @deprecated Cannot be used with ListGrid.
     * @override
     */
    rowCount?: undefined;
    /**
     * @deprecated Cannot be used with ListGrid.
     * @override
     */
    colCount?: undefined;
    /**
     * @deprecated Cannot be used with ListGrid.
     * @override
     */
    frozenRowCount?: undefined;
}
export { HeadersDefine, ColumnDefine, HeaderDefine, GroupHeaderDefine };
/**
 * ListGrid
 * @classdesc cheetahGrid.ListGrid
 * @memberof cheetahGrid
 */
export declare class ListGrid<T> extends DrawGrid implements ListGridAPI<T> {
    protected [_]: ListGridProtected<T>;
    disabled: boolean;
    readOnly: boolean;
    static get EVENT_TYPE(): typeof LG_EVENT_TYPE;
    /**
     * constructor
     *
     * @constructor
     * @param options Constructor options
     */
    constructor(options?: ListGridConstructorOptions<T>);
    /**
     * Dispose the grid instance.
     * @returns {void}
     */
    dispose(): void;
    /**
     * Gets the define of the header.
     */
    get header(): HeadersDefine<T>;
    /**
     * Sets the define of the header with the given data.
     * <pre>
     * column options
     * -----
     * caption: header caption
     * field: field name
     * width: column width
     * minWidth: column min width
     * maxWidth: column max width
     * icon: icon definition
     * message: message key name
     * columnType: column type
     * action: column action
     * style: column style
     * headerType: header type
     * headerStyle: header style
     * headerAction: header action
     * headerField: header field name
     * headerIcon: header icon definition
     * sort: define sort setting
     * -----
     *
     * multiline header
     * -----
     * caption: header caption
     * columns: columns define
     * -----
     * </pre>
     */
    set header(header: HeadersDefine<T>);
    /**
     * Gets the define of the layout.
     */
    get layout(): LayoutDefine<T>;
    /**
     * Sets the define of the layout with the given data.
     */
    set layout(layout: LayoutDefine<T>);
    /**
     * Get the row count per record
     */
    get recordRowCount(): number;
    /**
     * Get the records.
     */
    get records(): T[] | null;
    /**
     * Set the records from given
     */
    set records(records: T[] | null);
    /**
     * Get the data source.
     */
    get dataSource(): DataSource<T>;
    /**
     * Set the data source from given
     */
    set dataSource(dataSource: DataSource<T>);
    /**
     * Get the theme.
     */
    get theme(): Theme | null;
    /**
     * Set the theme from given
     */
    set theme(theme: Theme | null);
    /**
     * If set to true to allow pasting of ranges.
     */
    get allowRangePaste(): boolean;
    set allowRangePaste(allowRangePaste: boolean);
    /**
     * Get the font definition as a string.
     * @override
     */
    get font(): string;
    /**
     * Set the font definition with the given string.
     * @override
     */
    set font(font: string);
    /**
     * Get the background color of the underlay.
     * @override
     */
    get underlayBackgroundColor(): string;
    /**
     * Set the background color of the underlay.
     * @override
     */
    set underlayBackgroundColor(underlayBackgroundColor: string);
    /**
     * Get the sort state.
     */
    get sortState(): SortState;
    /**
     * Sets the sort state.
     * If `null` to set, the sort state is initialized.
     */
    set sortState(sortState: SortState | null);
    /**
     * Get the header values.
     */
    get headerValues(): HeaderValues;
    /**
     * Sets the header values.
     */
    set headerValues(headerValues: HeaderValues);
    /**
     * Get the field of the given column index.
     * @param  {number} col The column index.
     * @param  {number} row The row index.
     * @return {*} The field object.
     */
    getField(col: number, row: number): FieldDef<T> | undefined;
    /**
     * Get the column define of the given column index.
     * @param  {number} col The column index.
     * @param  {number} row The row index.
     * @return {*} The column define object.
     */
    getColumnDefine(col: number, row: number): ColumnDefine<T>;
    getColumnType(col: number, row: number): ColumnTypeAPI;
    /**
     * Get the header field of the given header cell.
     * @param  {number} col The column index.
     * @param  {number} row The header row index.
     * @return {*} The field object.
     */
    getHeaderField(col: number, row: number): any | undefined;
    /**
     * Get the header define of the given header cell.
     * @param  {number} col The column index.
     * @param  {number} row The header row index.
     * @return {*} The header define object.
     */
    getHeaderDefine(col: number, row: number): HeaderDefine<T>;
    /**
     * Get the record of the given row index.
     * @param  {number} row The row index.
     * @return {object} The record.
     */
    getRowRecord(row: number): MaybePromiseOrUndef<T>;
    /**
     * Get the record index of the given row index.
     * @param  {number} row The row index.
     */
    getRecordIndexByRow(row: number): number;
    /**
     * Gets the row index starting at the given record index.
     * @param  {number} index The record index.
     */
    getRecordStartRowByRecordIndex(index: number): number;
    /**
     * Get the column index of the given field.
     * @param  {*} field The field.
     * @return {number} The column index.
     * @deprecated use `getCellRangeByField` instead
     */
    getColumnIndexByField(field: FieldDef<T>): number | null;
    /**
     * Get the column index of the given field.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {number} The column index.
     */
    getCellRangeByField(field: FieldDef<T>, index: number): CellRange | null;
    /**
     * Focus the cell.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {void}
     */
    focusGridCell(field: FieldDef<T>, index: number): void;
    /**
     * Scroll to where cell is visible.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {void}
     */
    makeVisibleGridCell(field: FieldDef<T>, index: number): void;
    getGridCanvasHelper(): GridCanvasHelper<T>;
    /**
     * Get cell range information for a given cell.
     * @param {number} col column index of the cell
     * @param {number} row row index of the cell
     * @returns {object} cell range info
     */
    getCellRange(col: number, row: number): CellRange;
    /**
     * Get header range information for a given cell.
     * @param {number} col column index of the cell
     * @param {number} row row index of the cell
     * @returns {object} cell range info
     * @deprecated use `getCellRange` instead
     */
    getHeaderCellRange(col: number, row: number): CellRange;
    protected getCopyCellValue(col: number, row: number, range?: CellRange): unknown;
    protected onDrawCell(col: number, row: number, context: CellContext): MaybePromise<void>;
    doGetCellValue(col: number, row: number, valueCallback: (value: any) => void): boolean;
    doChangeValue(col: number, row: number, changeValueCallback: (before: any) => any): MaybePromise<boolean>;
    doSetPasteValue(text: string, test?: (data: SetPasteValueTestData<T>) => boolean): void;
    getHeaderValue(col: number, row: number): any | undefined;
    setHeaderValue(col: number, row: number, newValue: any): void;
    getLayoutCellId(col: number, row: number): LayoutObjectId;
    protected bindEventsInternal(): void;
    protected getMoveLeftColByKeyDownInternal({ col, row }: CellAddress): number;
    protected getMoveRightColByKeyDownInternal({ col, row, }: CellAddress): number;
    protected getMoveUpRowByKeyDownInternal({ col, row }: CellAddress): number;
    protected getMoveDownRowByKeyDownInternal({ col, row }: CellAddress): number;
    protected getOffsetInvalidateCells(): number;
    protected getCopyRangeInternal(range: CellRange): CellRange;
    fireListeners<TYPE extends keyof ListGridEventHandlersEventMap<T>>(type: TYPE, ...event: ListGridEventHandlersEventMap<T>[TYPE]): ListGridEventHandlersReturnMap[TYPE][];
}
