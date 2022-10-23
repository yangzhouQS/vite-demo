import { Theme } from "./themes/theme";
import type { ThemeDefine } from "./ts-types";
export declare const BASIC: Theme;
export declare const MATERIAL_DESIGN: Theme;
export declare const theme: {
    Theme: typeof Theme;
};
export declare function of(value: ThemeDefine | string | undefined | null): Theme | null;
export declare function getDefault(): Theme;
export declare function setDefault(defaultTheme: Theme): void;
export declare function getChoices(): {
    [key: string]: Theme;
};
