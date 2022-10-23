import type { AnyListener, EventListenerId } from "../ts-types";
/** @private */
declare const _: "$$$$private symbol$$$$";
/**
 * event target.
 */
export declare class EventTarget {
    private [_];
    /**
     * Adds an event listener.
     * @param  {string} type The event type id.
     * @param  {function} listener Callback method.
     * @return {number} unique id for the listener.
     */
    listen(type: string, listener: AnyListener): EventListenerId;
    /**
     * Removes an event listener which was added with listen() by the id returned by listen().
     * @param  {number} id the id returned by listen().
     * @return {void}
     */
    unlisten(id: EventListenerId): void;
    addEventListener(type: string, listener: AnyListener): void;
    removeEventListener(type: string, listener: AnyListener): void;
    hasListeners(type: string): boolean;
    /**
     * Fires all registered listeners
     * @param  {string}    type The type of the listeners to fire.
     * @param  {...*} args fire arguments
     * @return {*} the result of the last listener
     */
    fireListeners(type: string, ...args: any[]): any;
    dispose(): void;
}
export {};
