import { BaseTooltip } from "./BaseTooltip";
import { TooltipElement } from "./internal/TooltipElement";
export declare class Tooltip<T> extends BaseTooltip<T> {
    createTooltipElementInternal(): TooltipElement<T>;
}
