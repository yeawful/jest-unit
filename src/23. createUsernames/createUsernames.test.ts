import createUsernames from "./createUsernames";

describe("createUsernames", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2025-01-01"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("test1", () => {
    const data = [
      {
        firstName: "Emily",
        lastName: "N.",
        country: "Ireland",
        continent: "Europe",
        age: 30,
        language: "Ruby",
      },
      {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 20,
        language: "Clojure",
      },
    ];

    const expected = [
      {
        firstName: "Emily",
        lastName: "N.",
        country: "Ireland",
        continent: "Europe",
        age: 30,
        language: "Ruby",
        username: "emilyn1995",
        birthYear: 1995,
      },
      {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 20,
        language: "Clojure",
        username: "nore2005",
        birthYear: 2005,
      },
    ];

    expect(createUsernames(data)).toEqual(expected);
  });
});
