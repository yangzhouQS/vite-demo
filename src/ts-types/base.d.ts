export declare type MaybeUndef<T> = T | undefined;
export declare type PromiseOrUndef<T> = undefined | Promise<T | undefined>;
export declare type PromiseMaybeUndef<T> = Promise<T | undefined>;
export declare type MaybePromise<T> = T | Promise<T>;
export declare type MaybeCall<T, A extends any[]> = T | ((...args: A) => T);
export declare type MaybePromiseOrCall<T, A extends any[]> = T | Promise<T> | ((...args: A) => T);
export declare type MaybePromiseOrUndef<T> = T | undefined | Promise<T | undefined>;
export declare type MaybeCallOrUndef<T, A extends any[]> = undefined | T | ((...args: A) => T);
export declare type MaybePromiseOrCallOrUndef<T, A extends any[]> = T | undefined | Promise<T | undefined> | ((...args: A) => T);
export declare type PromiseMaybeUndefOrCall<T, A extends any[]> = Promise<T | undefined> | ((...args: A) => T);
export declare type PromiseMaybeCallOrUndef<T, A extends any[]> = Promise<MaybeCallOrUndef<T, A>>;
export declare type AnyFunction = (...args: any[]) => any;
export interface RectProps {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
export declare type ColorDef = CanvasRenderingContext2D["fillStyle"];
