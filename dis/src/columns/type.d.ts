import type { BaseColumnOption, BranchGraphColumnOption, ButtonColumnOption, ColumnTypeOption, IconColumnOption, MenuColumnOption, NumberColumnOption, PercentCompleteBarColumnOption } from "../ts-types";
import type { BaseColumn } from "./type/BaseColumn";
import { BranchGraphColumn } from "./type/BranchGraphColumn";
import { ButtonColumn } from "./type/ButtonColumn";
import { CheckColumn } from "./type/CheckColumn";
import { Column } from "./type/Column";
import { IconColumn } from "./type/IconColumn";
import { ImageColumn } from "./type/ImageColumn";
import { MenuColumn } from "./type/MenuColumn";
import { MultilineTextColumn } from "./type/MultilineTextColumn";
import { NumberColumn } from "./type/NumberColumn";
import { PercentCompleteBarColumn } from "./type/PercentCompleteBarColumn";
import { RadioColumn } from "./type/RadioColumn";
/**
 * column types
 * @namespace cheetahGrid.columns.type
 * @memberof cheetahGrid.columns
 */
export { Column, NumberColumn, CheckColumn, RadioColumn, ButtonColumn, ImageColumn, PercentCompleteBarColumn, IconColumn, BranchGraphColumn, MenuColumn, MultilineTextColumn, BaseColumnOption, BranchGraphColumnOption, ButtonColumnOption, IconColumnOption, MenuColumnOption, NumberColumnOption, PercentCompleteBarColumnOption, };
export declare function of<T>(columnType: ColumnTypeOption | BaseColumn<T> | null | undefined): BaseColumn<T>;
