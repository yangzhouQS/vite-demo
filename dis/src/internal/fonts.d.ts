import type { AnyFunction } from "../ts-types";
declare let load: (font: string, testStr: string, callback: AnyFunction) => void;
declare let check: (font: string, testStr: string) => boolean;
export { check, load };
