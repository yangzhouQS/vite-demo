import type { AnyFunction } from "../../../ts-types";
import { FontRuler } from "./FontRuler";
declare class FontWatchRunner {
    activeCallbacks: AnyFunction[];
    inactiveCallbacks: AnyFunction[];
    status: "ok" | "ng" | null;
    lastResortWidths_: {
        [font: string]: number;
    };
    fontRulerA_: FontRuler;
    fontRulerB_: FontRuler;
    started_: number;
    static load(font: string, testStr: string, activeCallback: AnyFunction, inactiveCallback: AnyFunction): void;
    constructor(font: string, testStr: string);
    then(activeCallback: AnyFunction, inactiveCallback: AnyFunction): void;
    private check_;
    isFallbackFont_(a: number, b: number): boolean;
    widthsMatchLastResortWidths_(a: number, b: number): boolean;
    widthMatches_(width: number, lastResortFont: string): boolean;
    isLastResortFont_(a: number, b: number): boolean;
    finish_(callbacks: AnyFunction[]): void;
}
export default FontWatchRunner;
