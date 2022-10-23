import type { AnyFunction, EventListenerId } from "../ts-types";
import type { EventTarget as CustomEventTarget } from "../core/EventTarget";
/** @private */
declare type EventHandlerTarget = EventTarget | CustomEventTarget;
/** @private */
declare type Listener = AnyFunction;
export declare class EventHandler {
    private _listeners;
    on<TYPE extends keyof GlobalEventHandlersEventMap>(target: EventHandlerTarget, type: TYPE, listener: (event: GlobalEventHandlersEventMap[TYPE]) => any, ...options: any[]): EventListenerId;
    on(target: EventHandlerTarget, type: string, listener: Listener, ...options: any[]): EventListenerId;
    once<TYPE extends keyof GlobalEventHandlersEventMap>(target: EventHandlerTarget, type: TYPE, listener: (event: GlobalEventHandlersEventMap[TYPE]) => any, ...options: any[]): EventListenerId;
    once(target: EventHandlerTarget, type: string, listener: Listener, ...options: (boolean | AddEventListenerOptions)[]): EventListenerId;
    tryWithOffEvents(target: EventHandlerTarget, type: string, call: () => void): void;
    off(id: EventListenerId | null | undefined): void;
    fire(target: EventTarget, type: string, ...args: any[]): void;
    hasListener(target: EventTarget, type: string): boolean;
    clear(): void;
    dispose(): void;
}
export {};
