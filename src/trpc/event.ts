import { EventEmitter, on } from "events";

export type EmitterMap = {
  question: [{ uid: string, qid: string, content: string }]
};
export const emitter = new EventEmitter<EmitterMap>();

export const sendEvent: typeof emitter.emit = (eventName, ...args) => {
  return emitter.emit(eventName, ...args);
};

type StaticEventEmitterIteratorOptions = Parameters<typeof on>[2];
export const receiveEvent = <E extends keyof EmitterMap>(eventName: E, options: StaticEventEmitterIteratorOptions) => {
  return on(emitter, eventName, options) as AsyncIterableIterator<EmitterMap[E]>;
};
