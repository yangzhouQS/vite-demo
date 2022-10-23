export declare class LRUCache<T> {
    private _list;
    private _map;
    private _cacheSize;
    constructor(cacheSize: number);
    get(key: string): T;
    put(key: string, value: T): void;
}
