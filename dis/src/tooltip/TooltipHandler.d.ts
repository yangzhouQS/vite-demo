import type { ListGridAPI } from "../ts-types";
import { Tooltip } from "./Tooltip";
export declare class TooltipHandler<T> {
    private _grid;
    private _tooltipInstances;
    private _attachInfo?;
    constructor(grid: ListGridAPI<T>);
    dispose(): void;
    _attach(col: number, row: number): void;
    _move(col: number, row: number): void;
    _detach(): void;
    _isAttachCell(col: number, row: number): boolean;
    _bindGridEvent(grid: ListGridAPI<T>): void;
    _getTooltipInstanceInfo(col: number, row: number): {
        instance: Tooltip<T>;
        type: string;
        content: string;
    } | null;
}
