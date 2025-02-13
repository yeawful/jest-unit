const findAllIdx = require("./findAllIdx");

describe("findAllIdx", () => {
  test("test1", () => {
    expect(findAllIdx([1, 0, 1, 0, 0, 1], 0)).toEqual([1, 3, 4]);
  });
  test("test2", () => {
    expect(findAllIdx([1, 2, 3, 4, 5, 6], 3)).toEqual([2]);
  });
  test("test3", () => {
    expect(findAllIdx([2, 2, 2, 2, 0, 2], 2)).toEqual([0, 1, 2, 3, 5]);
  });
});
