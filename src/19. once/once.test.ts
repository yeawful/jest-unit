import once from "./once";

describe("once", () => {
  test("test1", () => {
    const mockFunction = jest.fn();
    const onceF = once(mockFunction);

    onceF(); // 1
    onceF(); // 2
    onceF(); // 3

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
