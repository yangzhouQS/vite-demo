import type { ColorPropertyDefine, ColorsPropertyDefine } from "./define";
export interface IconDefine {
    d: string;
    width: number;
    height: number;
}
export declare type PartialThemeDefine = Partial<ThemeDefine>;
export interface ThemeDefine {
    font?: string;
    underlayBackgroundColor: string;
    color: ColorPropertyDefine;
    frozenRowsColor?: ColorPropertyDefine;
    defaultBgColor?: ColorPropertyDefine;
    frozenRowsBgColor?: ColorPropertyDefine;
    selectionBgColor: ColorPropertyDefine;
    highlightBgColor?: ColorPropertyDefine;
    borderColor: ColorsPropertyDefine;
    frozenRowsBorderColor: ColorsPropertyDefine;
    highlightBorderColor: ColorsPropertyDefine;
    checkbox: {
        uncheckBgColor?: ColorPropertyDefine;
        checkBgColor?: ColorPropertyDefine;
        borderColor?: ColorPropertyDefine;
    };
    radioButton: {
        checkColor?: ColorPropertyDefine;
        uncheckBorderColor?: ColorPropertyDefine;
        checkBorderColor?: ColorPropertyDefine;
        uncheckBgColor?: ColorPropertyDefine;
        checkBgColor?: ColorPropertyDefine;
    };
    button: {
        color?: ColorPropertyDefine;
        bgColor?: ColorPropertyDefine;
    };
    header: {
        sortArrowColor?: ColorPropertyDefine;
    };
    messages: {
        infoBgColor?: ColorPropertyDefine;
        errorBgColor?: ColorPropertyDefine;
        warnBgColor?: ColorPropertyDefine;
        boxWidth?: number;
        markHeight?: number;
    };
}
export declare type RequiredThemeDefine = Required<ThemeDefine> & {
    checkbox: Required<ThemeDefine["checkbox"]>;
    radioButton: Required<ThemeDefine["radioButton"]>;
    button: Required<ThemeDefine["button"]>;
    header: Required<ThemeDefine["header"]>;
    messages: Required<ThemeDefine["messages"]>;
};
