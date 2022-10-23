export declare function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, { classList, text, html, }?: {
    classList?: string[] | string;
    text?: string;
    html?: string;
}): HTMLElementTagNameMap[K];
export declare function empty(dom: HTMLElement): void;
export declare function toNodeList(arg: HTMLElement | HTMLElement[] | string): HTMLElement[];
export declare function appendHtml(dom: HTMLElement, inner: HTMLElement | HTMLElement[] | string): void;
export declare function disableFocus(el: HTMLElement): void;
export declare function enableFocus(el: HTMLElement): void;
export declare function isFocusable(el: Node): el is HTMLElement;
export declare function findPrevSiblingFocusable(el: HTMLElement): HTMLElement | null;
export declare function findNextSiblingFocusable(el: HTMLElement): HTMLElement | null;
