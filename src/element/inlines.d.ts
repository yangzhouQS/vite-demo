import { Inline } from "./Inline";
import type { SimpleColumnIconOption } from "../ts-types-internal";
export declare function iconOf(icon: SimpleColumnIconOption): Inline;
export declare function iconOf(icon: null): null;
export declare function of(content: string | Inline): Inline;
export declare function of(content?: string | Inline | null): null;
export declare function buildInlines(icons: SimpleColumnIconOption[] | null | undefined, inline: Inline | string | (string | Inline)[]): Inline[];
export declare function string(inline: Inline | string | (string | Inline)[]): string;
