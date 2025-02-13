const areBracketsBalanced = require("./areBracketsBalanced");

describe("areBracketsBalanced", () => {
  test("true", () => {
    expect(areBracketsBalanced("(())")).toBe(true);
  });
  test("false", () => {
    expect(areBracketsBalanced("(()")).toBe(false);
  });
  test("true2", () => {
    expect(areBracketsBalanced("")).toBe(true);
  });
  test("false2", () => {
    expect(areBracketsBalanced(")(")).toBe(false);
  });
});
