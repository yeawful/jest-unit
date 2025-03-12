import getArraysCounts from "./getArraysCounts";

describe("getArraysCounts", () => {
  test("test1", () => {

  const obj = { name: 123 };
  const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
  const counts = getArraysCounts(data);// экземпляр Map

    expect(counts.get(1)).toEqual(3);
    expect(counts.get(2)).toEqual(4);
    expect(counts.get(true)).toEqual(2);
    expect(counts.get(obj)).toEqual(2);
  });
});