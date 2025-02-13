const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  test("FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  test("Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  test("Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  test("num", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});
