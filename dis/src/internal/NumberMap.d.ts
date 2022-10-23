export declare class NumberMap<T> {
    private _keys;
    private _vals;
    private _sorted;
    put(key: number, value: T): void;
    remove(key: number): void;
    get(key: number): T | undefined;
    has(key: number): boolean;
    each(keyFrom: number, keyTo: number, fn: (t: T, k: number) => void): void;
}
