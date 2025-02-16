import optionalChaining from "./optionalChaining";

describe("optionalChaining", () => {
  test("test1", () => {
    const obj = {
      a: {
        b: {
          c: {
            d: "Привет!",
          },
        },
      },
    };
    expect(optionalChaining(obj, ["a", "b", "c", "d"])).toBe("Привет!");
  });
  test("test2", () => {
    const obj = {
      a: {
        b: {
          c: {
            d: "Привет!",
          },
        },
      },
    };
    expect(optionalChaining(obj, ["a", "b", "c", "d", "e"])).toBe(undefined);
  });
  test("test3", () => {
    const obj = {
      a: {
        b: {
          c: {
            d: "Привет!",
          },
        },
      },
    };
    expect(optionalChaining(obj, ["a", "c", "d"])).toBe(undefined);
  });
  test("test4", () => {
    const obj = {
      a: {
        b: {
          c: {
            d: "Привет!",
          },
        },
      },
    };
    expect(optionalChaining(obj, ["b", "d", "a"])).toBe(undefined);
  });
});
