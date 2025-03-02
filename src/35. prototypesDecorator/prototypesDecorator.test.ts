import Addition from "./prototypesDecorator";

describe("Addition", () => {
  test("test1", () => {
    
    const startedValue = new Addition(5);
    const result = startedValue.add(3, 5, 6); // В консоль выводится "called"

    expect(result).toBe(19);
  });
});