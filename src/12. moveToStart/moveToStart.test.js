const moveToStart = require("./moveToStart");

describe("moveToStart", () => {
  test("test1", () => {
    expect(moveToStart([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
  });
  test("test2", () => {
    expect(moveToStart([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  test("test3", () => {
    expect(moveToStart([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
  });
  test("test4", () => {
    expect(moveToStart([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
  });
  test("test5", () => {
    expect(moveToStart([1, 2, 3, 4, 5], 4)).toEqual([2, 3, 4, 5, 1]);
  });
});
