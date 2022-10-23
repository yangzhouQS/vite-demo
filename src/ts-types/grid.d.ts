import type { MaybePromiseOrUndef } from "./base";
export interface CellAddress {
    col: number;
    row: number;
}
export interface CellRange {
    start: CellAddress;
    end: CellAddress;
}
export declare type FieldGetter<T> = (record: T) => any;
export declare type FieldSetter<T> = (record: T, value: any) => void;
export interface FieldAssessor<T> {
    get: FieldGetter<T>;
    set: FieldSetter<T>;
}
export declare type FieldDef<T> = keyof T | FieldGetter<T> | FieldAssessor<T>;
export declare type FieldData = MaybePromiseOrUndef<any>;
