import type { CellAddress, CellRange, MaybeCall, MaybePromise } from "../ts-types";
declare const isNode: boolean;
declare type ArrayElementPredicate<E> = (t: E, i: number, arr: E[]) => boolean;
declare type ArrayElementFunction<E> = (t: E, i: number, arr: E[]) => void;
declare type ObjectElementFunction<T, K extends keyof T> = (t: T[K], key: K, obj: T) => void;
declare const array: {
    readonly find: <T>(arr: T[], predicate: ArrayElementPredicate<T>) => T | undefined;
    readonly findIndex: <T_1>(arr: T_1[], predicate: ArrayElementPredicate<T_1>) => number;
};
declare function setReadonly<T, K extends keyof T>(obj: T, name: K, value: T[K]): void;
export declare function each<E>(obj: E[], fn: ArrayElementFunction<E>): void;
export declare function each<T, K extends keyof T>(obj: T, fn: ObjectElementFunction<T, K>): void;
declare function isObject(obj: any): obj is Record<string, any>;
export declare function omit<T, K extends keyof T>(source: T, omits: K[]): Omit<T, K>;
export declare function defaults<T>(source: T, defs: Partial<T>): T;
export declare function extend<T, U>(t: T, u: U): T & U;
export declare function extend<T, U, V>(t: T, u: U, v: V): T & U & V;
export declare function extend<T>(...args: T[]): T;
declare function isDescendantElement(root: HTMLElement, target: HTMLElement): boolean;
declare function applyChainSafe(obj: any, fn: (value: any, name: string) => any, ...names: string[]): any;
declare function getChainSafe(obj: any, ...names: string[]): any;
declare function getOrApply<_T, A extends any[]>(value: undefined, ...args: A): undefined;
declare function getOrApply<_T, A extends any[]>(value: null, ...args: A): null;
declare function getOrApply<T, A extends any[]>(value: MaybeCall<T, A>, ...args: A): T;
declare function endsWith(str: string, searchString: string, position?: number): boolean;
declare function genChars(s: string): {
    next(): string | null;
};
export declare type GenWordsResult = {
    next(): string | null;
};
declare function genWords(s: string): GenWordsResult;
export declare function isPromise<T>(data: T | Promise<T> | undefined): data is Promise<T>;
declare function then<T, R>(result: MaybePromise<T>, callback: (arg: T) => MaybePromise<R>): MaybePromise<R>;
declare function then<T, R>(result: MaybePromise<T>, callback: (arg: T) => R): MaybePromise<R>;
declare function getMouseButtons(e: MouseEvent): number;
declare function getKeyCode(e: KeyboardEvent): number;
declare function isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent;
declare function getIgnoreCase(obj: any, name: string): any;
declare function cancel(e: Event): void;
declare function toBoxArray<T>(obj: T | T[]): [T, T, T, T];
export { isNode, isDescendantElement, getChainSafe, applyChainSafe, getOrApply, getIgnoreCase, then, array, };
export declare function cellEquals(a: CellAddress, b: CellAddress): boolean;
export declare function cellInRange(range: CellRange, col: number, row: number): boolean;
export declare const browser: {
    IE: boolean;
    Edge: boolean;
    Chrome: boolean;
    Firefox: boolean;
    Safari: boolean;
    heightLimit: number;
};
export declare const obj: {
    setReadonly: typeof setReadonly;
    isObject: typeof isObject;
};
export declare const str: {
    endsWith: typeof endsWith;
    genChars: typeof genChars;
    genWords: typeof genWords;
};
export declare const event: {
    getMouseButtons: typeof getMouseButtons;
    getKeyCode: typeof getKeyCode;
    isTouchEvent: typeof isTouchEvent;
    cancel: typeof cancel;
};
export declare const style: {
    toBoxArray: typeof toBoxArray;
};
export declare const emptyFn: Function;
