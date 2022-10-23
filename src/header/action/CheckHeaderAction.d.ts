import type { EventListenerId, LayoutObjectId } from "../../ts-types";
import type { GridInternal } from "../../ts-types-internal";
import { BaseAction } from "./BaseAction";
export declare class CheckHeaderAction<T> extends BaseAction<T> {
    clone(): CheckHeaderAction<T>;
    bindGridEvent(grid: GridInternal<T>, cellId: LayoutObjectId): EventListenerId[];
}
