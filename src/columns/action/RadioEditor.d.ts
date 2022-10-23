import type { ActionListener, CellAddress, EventListenerId, GetRadioEditorGroup, LayoutObjectId, RadioEditorOption } from "../../ts-types";
import { Editor } from "./Editor";
import type { GridInternal } from "../../ts-types-internal";
import type { RangePasteContext } from "./BaseAction";
export declare class RadioEditor<T> extends Editor<T> {
    protected _group: GetRadioEditorGroup<T> | undefined;
    private _checkAction;
    constructor(option?: RadioEditorOption<T>);
    clone(): RadioEditor<T>;
    /** @deprecated Use checkAction instead. */
    get group(): GetRadioEditorGroup<T> | undefined;
    /** @deprecated Use checkAction instead. */
    set group(group: GetRadioEditorGroup<T> | undefined);
    get checkAction(): ActionListener | undefined;
    set checkAction(checkAction: ActionListener | undefined);
    bindGridEvent(grid: GridInternal<T>, cellId: LayoutObjectId): EventListenerId[];
    onPasteCellRangeBox(grid: GridInternal<T>, cell: CellAddress, value: string, context: RangePasteContext): void;
    onDeleteCellRangeBox(): void;
    private _action;
}
