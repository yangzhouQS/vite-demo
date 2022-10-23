import type { MaybePromise } from "../ts-types";
export declare function sortArray<T>(array: T[], compare: (a: T, b: T) => number): void;
export declare function sort<R, _F>(get: (i: number) => R, set: (i: number, r: R) => void, length: number, compare: (a: R, b: R) => number): void;
export declare function sort<R, F>(get: (i: number) => R, set: (i: number, r: R) => void, length: number, compare: (a: F, b: F) => number, getField: (r: R) => F): void;
export declare function sortPromise<R, _F>(get: (i: number) => MaybePromise<R>, set: (i: number, r: R) => void, length: number, compare: (a: R, b: R) => number): void;
export declare function sortPromise<R, F>(get: (i: number) => MaybePromise<R>, set: (i: number, r: R) => void, length: number, compare: (a: F, b: F) => number, getField: (r: R) => MaybePromise<F | undefined>): Promise<void>;
