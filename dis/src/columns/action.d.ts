import type { ActionOption, BaseActionOption, ButtonActionOption, ColumnActionOption, EditorOption, InlineInputEditorOption, InlineMenuEditorOption, RecordBoolean, SmallDialogInputEditorOption } from "../ts-types";
import { Action } from "./action/Action";
import { BaseAction } from "./action/BaseAction";
import { ButtonAction } from "./action/ButtonAction";
import { CheckEditor } from "./action/CheckEditor";
import { Editor } from "./action/Editor";
import { InlineInputEditor } from "./action/InlineInputEditor";
import { InlineMenuEditor } from "./action/InlineMenuEditor";
import { RadioEditor } from "./action/RadioEditor";
import { SmallDialogInputEditor } from "./action/SmallDialogInputEditor";
declare class ImmutableCheckEditor extends CheckEditor<any> {
    get disabled(): RecordBoolean;
    get readOnly(): RecordBoolean;
}
declare class ImmutableRadioEditor extends RadioEditor<any> {
    get disabled(): RecordBoolean;
    get readOnly(): RecordBoolean;
}
declare class ImmutableInputEditor extends SmallDialogInputEditor<any> {
    get disabled(): RecordBoolean;
    get readOnly(): RecordBoolean;
}
export declare const ACTIONS: {
    CHECK: ImmutableCheckEditor;
    INPUT: ImmutableInputEditor;
    RADIO: ImmutableRadioEditor;
};
/**
 * column actions
 * @namespace cheetahGrid.columns.action
 * @memberof cheetahGrid.columns
 */
export { BaseAction, Editor, Action, CheckEditor, RadioEditor, ButtonAction, SmallDialogInputEditor, InlineInputEditor, InlineMenuEditor, ActionOption, BaseActionOption, ButtonActionOption, EditorOption, InlineInputEditorOption, InlineMenuEditorOption, SmallDialogInputEditorOption, };
export declare function of<T>(columnAction: ColumnActionOption | BaseAction<T> | null | undefined): BaseAction<T> | undefined;
