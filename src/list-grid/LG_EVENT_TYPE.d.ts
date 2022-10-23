import type { DrawGridEvents } from "../core/DG_EVENT_TYPE";
export interface ListGridEvents extends DrawGridEvents {
    /**
     * Indicates when the cell value was changed.
     */
    CHANGED_VALUE: "changed_value";
    /**
     * Indicates when the header cell value was changed.
     */
    CHANGED_HEADER_VALUE: "changed_header_value";
    /**
     * Indicates that the pasted value has been rejected.
     */
    REJECTED_PASTE_VALUES: "rejected_paste_values";
}
export declare const LG_EVENT_TYPE: ListGridEvents;
