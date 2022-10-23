import type { ColumnMenuItemOption, ColumnMenuItemOptions } from "../ts-types";
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */
export declare function normalize(options: ColumnMenuItemOptions | undefined): ColumnMenuItemOption[];
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */
export declare function normalizeToFn<T>(options: ColumnMenuItemOptions | ((record: T | undefined) => ColumnMenuItemOptions) | undefined): (record: T | undefined) => ColumnMenuItemOption[];
