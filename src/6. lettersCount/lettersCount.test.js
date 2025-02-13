const lettersCount = require("./lettersCount");

describe("lettersCount", () => {
  test("Проверяем", () => {
    expect(lettersCount("aAAbbccde")).toEqual({ a: 3, b: 2, c: 2, d: 1, e: 1 });
  });
});
