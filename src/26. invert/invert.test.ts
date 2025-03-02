import invert from "./invert";

describe("invert", () => {
  test("test1", () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
  });
});