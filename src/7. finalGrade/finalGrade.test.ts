import finalGrade from "./finalGrade";

describe("finalGrade", () => {
  test("100", () => {
    expect(finalGrade(100, 12)).toBe(100);
  });
  test("90", () => {
    expect(finalGrade(85, 5)).toBe(90);
  });
  test("75", () => {
    expect(finalGrade(55, 3)).toBe(75);
  });
  test("0", () => {
    expect(finalGrade(20, 2)).toBe(0);
  });
});
