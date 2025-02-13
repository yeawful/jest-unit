const reverseLongWords = require("./reverseLongWords");

describe("reverseLongWords", () => {
  test("Переворачивем, если больше 5 букв в слове", () => {
    expect(reverseLongWords("Это тест функции")).toBe("Это тест иицкнуф");
  });
});
