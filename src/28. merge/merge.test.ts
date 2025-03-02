import merge from "./merge";

describe("merge", () => {
  test("test1", () => {
    expect(merge(
      {
        name: 'John',
        age: 22,
      },
      {
        surname: 'Klein',
        age: 20,
        profession: 'student',
      },
      {
        profession: 'frontend developer',
        country: 'USA',
      }
    )).toEqual({
      name: 'John',
      surname: 'Klein',
      age: 20,
      profession: 'frontend developer',
      country: 'USA',
    });
  });
});