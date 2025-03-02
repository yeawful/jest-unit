import { BroadcastEventEmitter, EventEmitter } from "./eventEmitter";

describe("EventEmitter", () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  describe("on", () => {
    test("on", () => {
      const callback = jest.fn();
      emitter.on("testEvent", callback);
      emitter.emit("testEvent");
      expect(callback).toHaveBeenCalled();
    });
  });

  describe("off", () => {
    test("off", () => {
      const callback = jest.fn();
      emitter.on("testEvent", callback);
      emitter.off("testEvent", callback);
      emitter.emit("testEvent");
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe("once", () => {
    test("once", () => {
      const callback = jest.fn();
      emitter.once("testEvent", callback);
      emitter.emit("testEvent");
      emitter.emit("testEvent");
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("emit", () => {
    test("emit", () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      emitter.on("testEvent", callback1);
      emitter.on("testEvent", callback2);
      emitter.emit("testEvent");
      expect(callback1).toHaveBeenCalled();
      expect(callback2).toHaveBeenCalled();
    });
  });
});

describe("BroadcastEventEmitter", () => {
  let broadcastEmitter: BroadcastEventEmitter;

  beforeEach(() => {
    broadcastEmitter = new BroadcastEventEmitter();
  });

  describe("emit", () => {
    test("emit", () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      broadcastEmitter.on("event1", callback1);
      broadcastEmitter.on("event2", callback2);
      broadcastEmitter.emit("*");
      expect(callback1).toHaveBeenCalled();
      expect(callback2).toHaveBeenCalled();
    });
  });
});