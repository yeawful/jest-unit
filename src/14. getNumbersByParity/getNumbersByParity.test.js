const getNumbersByParity = require("./getNumbersByParity");

describe("getNumbersByParity", () => {
  test("test1", () => {
    const data = [1, 2, 3, 4, 5, 6];
    expect(getNumbersByParity(data, "even")).toEqual([2, 4, 6]);
    expect(getNumbersByParity(data, "odd")).toEqual([1, 3, 5]);
  });
});
