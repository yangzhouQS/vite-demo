import type { BranchGraphColumnOption, CellContext, GridCanvasHelperAPI, MaybePromise } from "../../ts-types";
import type { DrawCellInfo, GridInternal } from "../../ts-types-internal";
import { BaseColumn } from "./BaseColumn";
import { BranchGraphStyle } from "../style/BranchGraphStyle";
/**
 * BranchGraphColumn
 *
 * Data commands
 * - mastar branch or orphan branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: 'branch name A',
 * }
 * ```
 *
 * - commit
 *
 * ```js
 * {
 * 	command: 'commit',
 * 	branch: 'branch name A'
 * }
 * ```
 *
 * - branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: {
 * 		from: 'branch name A',
 * 		to: 'branch name B'
 * 	}
 * }
 * ```
 *
 * - merge
 *
 * ```js
 * {
 * 	command: 'merge',
 * 	branch: {
 * 		from: 'branch name B',
 * 		to: 'branch name A'
 * 	}
 * }
 * ```
 *
 * - tag
 *
 * ```js
 * {
 * 	command: 'tag',
 * 	branch: 'branch name A',
 * 	tag: 'tag name'
 * }
 * ```
 *
 * @memberof cheetahGrid.columns.type
 */
export declare class BranchGraphColumn<T> extends BaseColumn<T> {
    private _start;
    private _cache;
    constructor(option?: BranchGraphColumnOption);
    get StyleClass(): typeof BranchGraphStyle;
    clearCache(grid: GridInternal<T>): void;
    onDrawCell(cellValue: MaybePromise<unknown>, info: DrawCellInfo<T>, context: CellContext, grid: GridInternal<T>): void | Promise<void>;
    clone(): BranchGraphColumn<T>;
    drawInternal(_value: unknown, context: CellContext, style: BranchGraphStyle, helper: GridCanvasHelperAPI, grid: GridInternal<T>, { drawCellBase }: DrawCellInfo<T>): void;
}
