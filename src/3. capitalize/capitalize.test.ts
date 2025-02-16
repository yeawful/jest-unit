import capitalize from "./capitalize";

describe("capitalize", () => {
  test("Заглавные буквы", () => {
    expect(capitalize("привЕт, этО тЕСТ")).toBe("Привет, Это Тест");
  });
});
