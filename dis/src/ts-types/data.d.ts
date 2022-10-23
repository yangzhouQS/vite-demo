export interface MessageObject {
    type: "error" | "info" | "warning";
    message: string | null;
    original?: Message;
}
export declare type Message = MessageObject | string;
