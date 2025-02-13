const wrapInParagraph = require("./wrapInParagraph");

describe("wrapInParagraph", () => {
  test("Оборачивем строку в тег <p>", () => {
    expect(wrapInParagraph("Текст")).toBe("<p>Текст</p>");
  });
  test("Несколько строк", () => {
    expect(wrapInParagraph(`Текст номер один`)).toBe(
      "<p>Текст</p> <p>номер</p> <p>один</p>"
    );
  });
});
