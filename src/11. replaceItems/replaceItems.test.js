const replaceItemsClear = require("./replaceItems");
const replaceItemsMutate = require("./replaceItems");

describe("replaceItems", () => {
  test("replaceItems", () => {
    expect(replaceItemsClear([1, 2, 3, 4, 2], 2, "a")).toEqual([
      1,
      "a",
      3,
      4,
      "a",
    ]);
    const arr = [1, 2, 3, 4, 2];
    expect(replaceItemsMutate(arr, 2, "a")).toEqual([1, "a", 3, 4, "a"]);
  });
});
