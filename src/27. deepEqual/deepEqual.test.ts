import deepEqual from "./deepEqual";

describe("deepEqual", () => {
  const firstObject = {
    a: {
      b: {
        c: 1,
        d: 'string',
        e: {
          num: 1
        }
      }
    }
  };
  
  const secondObject = {
    a: {
      b: {
        e: {
          num: 1,
        },
        d: 'string',
        c: 1,
      }
    }
  };
  test("test1", () => {
    expect(deepEqual(firstObject, secondObject)).toBe(true);
    expect(deepEqual({ a:1, b: 3 }, { b: 2, a: 1})).toBe(false)
    expect(deepEqual(1, 2)).toBe(false)
    expect(deepEqual(true, false)).toBe(false)
  });
});