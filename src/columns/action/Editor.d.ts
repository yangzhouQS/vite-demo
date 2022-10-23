import type { EditorOption, RecordBoolean } from "../../ts-types";
import { BaseAction } from "./BaseAction";
export declare abstract class Editor<T> extends BaseAction<T> {
    protected _readOnly: RecordBoolean;
    constructor(option?: EditorOption);
    get editable(): boolean;
    get readOnly(): RecordBoolean;
    set readOnly(readOnly: RecordBoolean);
    onChangeReadOnlyInternal(): void;
}
