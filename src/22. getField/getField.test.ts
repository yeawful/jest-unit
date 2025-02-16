import getField from "./getField";

describe("getField", () => {
  test("test1", () => {
    const data = [
      {
        name: "Denis",
        age: 25,
      },
      {
        name: "Ivan",
      },
      {
        name: "Ann",
        age: 18,
      },
    ];
    expect(getField(data, "age")).toEqual([25, undefined, 18]);
  });
});
