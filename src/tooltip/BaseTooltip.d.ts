import type { ListGridAPI } from "../ts-types";
import type { TooltipElement } from "./internal/TooltipElement";
export declare abstract class BaseTooltip<T> {
    private _grid;
    private _tooltipElement?;
    constructor(grid: ListGridAPI<T>);
    dispose(): void;
    private _getTooltipElement;
    abstract createTooltipElementInternal(): TooltipElement<T>;
    attachTooltipElement(col: number, row: number, content: string): void;
    moveTooltipElement(col: number, row: number): void;
    detachTooltipElement(): void;
}
