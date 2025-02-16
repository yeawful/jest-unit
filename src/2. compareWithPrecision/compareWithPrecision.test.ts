import compareWithPrecision from "./compareWithPrecision";

describe("compareWithPrecision", () => {
  test("Корректное значение", () => {
    expect(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001)).toBe(true);
  });
  test("Корректное значение2", () => {
    expect(compareWithPrecision(0.09999 + 0.30001, 0.4, 0.0001)).toBe(true);
  });
  test("Ошибка", () => {
    expect(compareWithPrecision(0.2 + 0.5, 0.6, 0.0001)).toBe(false);
  });
  test("Ошибка2", () => {
    expect(compareWithPrecision(0.2 + 0.42, 0.6, 0.0001)).toBe(false);
  });
});
