import hasArrays from "./hasArrays";

describe("hasArrays", () => {
  test("test1 true", () => {
    const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
    expect(hasArrays(data1)).toEqual(true);
  });
  test("test2 false", () => {
    const data2 = [false, true, 1, 0, NaN];
    expect(hasArrays(data2)).toEqual(false);
  });
});
