import throttle from "./throttledFn";

describe("throttledFn", () => {
  jest.useFakeTimers();

  test("test1", () => {
    let counter = 0;
    const fn = () => {
      counter++;
    };

    const throttledFn = throttle(fn, 500);

    const intervalId = setInterval(throttledFn, 100);

    jest.advanceTimersByTime(1000);

    clearInterval(intervalId);

    expect(counter).toBe(3);
  });
});