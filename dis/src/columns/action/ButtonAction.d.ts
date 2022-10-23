import type { ButtonColumnState, GridInternal } from "../../ts-types-internal";
import { Action } from "./Action";
export declare class ButtonAction<T> extends Action<T> {
    getState(grid: GridInternal<T>): ButtonColumnState;
}
