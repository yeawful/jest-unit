const partition = require("./partition");

describe("partition", () => {
  test("test1", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    expect(partition(numbers, (element) => element > 3)).toEqual([
      [4, 5, 6],
      [1, 2, 3],
    ]);
  });
  test("test2", () => {
    const numbers = [0, 1, 2, {}, false, "", "0"];
    expect(partition(numbers, (element) => element)).toEqual([
      [1, 2, {}, "0"],
      [0, false, ""],
    ]);
  });
  test("test3", () => {
    const users = [
      { user: "barney", age: 36, active: false },
      { user: "fred", age: 40, active: true },
      { user: "pebbles", age: 1, active: false },
    ];
    expect(partition(users, (element) => element.active)).toEqual([
      [{ user: "fred", age: 40, active: true }],
      [
        { user: "barney", age: 36, active: false },
        { user: "pebbles", age: 1, active: false },
      ],
    ]);
  });
});
