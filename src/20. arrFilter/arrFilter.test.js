const arrFilter = require("./arrFilter");

describe("arrFilter", () => {
  test("test1", () => {
    const { inRange, inArray, notInArray } = arrFilter();
    let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

    expect(arr.filter(inRange(3, 6))).toEqual([3, 4, 5, 6]);
    expect(arr.filter(inArray([1, 2, 10, undefined]))).toEqual([
      1,
      2,
      undefined,
    ]);
    expect(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))).toEqual([
      undefined,
      NaN,
    ]);
  });
});
