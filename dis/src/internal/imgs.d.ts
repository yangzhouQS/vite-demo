import type { MaybePromise } from "../ts-types";
export declare function loadImage(src: string): Promise<HTMLImageElement>;
export declare function getCacheOrLoad(cacheName: string, cacheSize: number, src: MaybePromise<string>): MaybePromise<HTMLImageElement>;
