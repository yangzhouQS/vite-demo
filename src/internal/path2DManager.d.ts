export declare function getPath2D(): typeof Path2D;
export declare function fill(pathModule: {
    width: number;
    height: number;
    ud?: boolean;
    x?: number;
    y?: number;
    d: string;
    path2d?: Path2D;
}, ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void;
