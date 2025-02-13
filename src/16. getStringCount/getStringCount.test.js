const getStringCount = require("./getStringCount");

describe("getStringCount", () => {
  test("test1", () => {
    expect(
      getStringCount({
        first: "1",
        second: "2",
        third: false,
        fourth: ["anytime", 2, 3, 4],
        fifth: null,
      })
    ).toBe(3);
  });
  test("test2", () => {
    expect(getStringCount(["1", "2", ["3"]])).toBe(3);
  });
  test("test3", () => {
    expect(getStringCount("asd")).toBe(1);
  });
});
