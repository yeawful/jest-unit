const defaultTo = require("./defaultTo");

describe("defaultTo", () => {
  test("number", () => {
    expect(defaultTo(5, 10)).toBe(5);
  });

  test("undefined", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test("null", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test("NaN", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  test("string", () => {
    expect(defaultTo("asd", 10)).toBe("asd");
  });
});
