import sequenceSum from "./sequenceSum";

describe("sequenceSum", () => {
  test("test1", () => {
    expect(sequenceSum(1, 5)).toEqual(15);
  });
  test("test2", () => {
    expect(sequenceSum(4, 10)).toEqual(49);
  });
  test("test3", () => {
    expect(sequenceSum(-3, 2)).toEqual(-3);
  });
  test("test3 >", () => {
    expect(sequenceSum(5, 2)).toEqual(0);
  });
  test("test4 >", () => {
    expect(sequenceSum(5, 5)).toEqual(5);
  });
});
