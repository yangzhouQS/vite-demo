import type { ListGridAPI, RecordBoolean } from "../../ts-types";
export declare function isDisabledRecord<T>(option: RecordBoolean, grid: ListGridAPI<T>, row: number): boolean;
export declare function isReadOnlyRecord<T>(option: RecordBoolean, grid: ListGridAPI<T>, row: number): boolean;
export declare function toggleValue(val: number): number;
export declare function toggleValue(val: string): string;
export declare function toggleValue(val: unknown): boolean;
