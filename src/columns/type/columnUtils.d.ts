import type { CellContext, ColumnIconOption, GridCanvasHelperAPI, MaybePromise } from "../../ts-types";
import type { SimpleColumnIconOption } from "../../ts-types-internal";
export declare function loadIcons(icon: MaybePromise<ColumnIconOption<never> | ColumnIconOption<never>[]> | null, context: CellContext, helper: GridCanvasHelperAPI, callback: (icons: SimpleColumnIconOption[] | undefined, context: CellContext) => void): void;
