import type { BaseStyleOption, CheckHeaderStyleOption, HeaderStyleOption, SortHeaderStyleOption } from "../ts-types";
import { BaseStyle } from "./style/BaseStyle";
import { CheckHeaderStyle } from "./style/CheckHeaderStyle";
import { MultilineTextHeaderStyle } from "./style/MultilineTextHeaderStyle";
import { SortHeaderStyle } from "./style/SortHeaderStyle";
import { Style } from "./style/Style";
export { BaseStyle, Style, SortHeaderStyle, CheckHeaderStyle, BaseStyleOption, CheckHeaderStyleOption, MultilineTextHeaderStyle, SortHeaderStyleOption, };
export declare function of(headerStyle: HeaderStyleOption | null | undefined, StyleClass: typeof BaseStyle): BaseStyle;
