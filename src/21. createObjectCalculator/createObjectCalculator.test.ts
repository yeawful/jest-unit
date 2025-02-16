import createObjectCalculator from "./createObjectCalculator";

describe("createObjectCalculator", () => {
  test("test1", () => {
    const calculator = createObjectCalculator(2, 3);
    expect(calculator.sum()).toBe(5);
    expect(calculator.mul()).toBe(6);
    calculator.read(12, 34);
    expect(calculator.sum()).toBe(46);
    expect(calculator.mul()).toBe(408);
  });
});
