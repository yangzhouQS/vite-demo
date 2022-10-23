import type { BaseStyleOption, ButtonStyleOption, CheckStyleOption, ColumnStyleOption, IconStyleOption, ImageStyleOption, MenuStyleOption, MultilineTextStyleOption, NumberStyleOption, PercentCompleteBarStyleOption, StyleOption } from "../ts-types";
import { BaseStyle } from "./style/BaseStyle";
import { ButtonStyle } from "./style/ButtonStyle";
import { CheckStyle } from "./style/CheckStyle";
import { IconStyle } from "./style/IconStyle";
import { ImageStyle } from "./style/ImageStyle";
import { MenuStyle } from "./style/MenuStyle";
import { MultilineTextStyle } from "./style/MultilineTextStyle";
import { NumberStyle } from "./style/NumberStyle";
import { PercentCompleteBarStyle } from "./style/PercentCompleteBarStyle";
import { RadioStyle } from "./style/RadioStyle";
import { Style } from "./style/Style";
declare const EVENT_TYPE: {
    CHANGE_STYLE: "change_style";
};
export { EVENT_TYPE, BaseStyle, Style, NumberStyle, CheckStyle, RadioStyle, ButtonStyle, ImageStyle, IconStyle, PercentCompleteBarStyle, MultilineTextStyle, MenuStyle, BaseStyleOption, ButtonStyleOption, CheckStyleOption, IconStyleOption, ImageStyleOption, MenuStyleOption, MultilineTextStyleOption, NumberStyleOption, PercentCompleteBarStyleOption, StyleOption, };
export declare function of(columnStyle: ColumnStyleOption | null | undefined, record: any, StyleClassDef?: typeof BaseStyle): BaseStyle;
