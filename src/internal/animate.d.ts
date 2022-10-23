declare const EASINGS: {
    linear(p: number): number;
    easeIn: EasingFunction;
    easeOut: EasingFunction;
    easeInOut: EasingFunction;
};
export declare type EasingFunction = (t: number) => number;
export declare type EasingKind = keyof typeof EASINGS;
export declare type StepFunction = (s: number) => void;
/**
 * <pre>
 * Animates.
 * </pre>
 * @function
 * @param {number} duration animation time.
 * @param {function} step step
 * @param {function|string} easing easing
 * @returns {object} Deferred object.
 */
export declare function animate(duration: number, step: StepFunction, easing?: EasingKind | EasingFunction): {
    cancel: () => void;
};
export {};
