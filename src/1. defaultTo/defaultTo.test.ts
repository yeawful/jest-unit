import defaultTo from "./defaultTo";

describe("defaultTo", () => {
  test("number", () => {
    expect(defaultTo(5, 10)).toBe(5);
  });

  test("NaN", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });
});
