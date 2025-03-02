import Calc from "./calc";

describe("invert", () => {
  test("test1", () => {

    const calc = new Calc();
    const ten = calc.add(10)

    expect(calc.result()).toEqual(0);
    expect(calc.add(5).result()).toEqual(5);
    expect(calc.add(3).sub(10).result()).toEqual(-7);

    expect(ten.sub(5).result()).toEqual(5);
    expect(ten.result()).toEqual(10);
  });
});