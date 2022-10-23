import { Column } from "./Column";
import type { NumberColumnOption } from "../../ts-types";
import { NumberStyle } from "../style/NumberStyle";
export declare class NumberColumn<T> extends Column<T> {
    private _format?;
    static get defaultFotmat(): Intl.NumberFormat;
    static set defaultFotmat(fmt: Intl.NumberFormat);
    constructor(option?: NumberColumnOption);
    get StyleClass(): typeof NumberStyle;
    clone(): NumberColumn<T>;
    get format(): Intl.NumberFormat | undefined;
    withFormat(format: Intl.NumberFormat): NumberColumn<T>;
    convertInternal(value: unknown): string;
}
