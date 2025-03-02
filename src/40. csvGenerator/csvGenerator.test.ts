import csvGenerator from "./csvGenerator";

describe("csvGenerator", () => {
  test("csvGenerator", () => {
    const data = [
      [1, "Ivan Ivanovich", "ivan@mail.com"],
      [2, "Andrey, Andreevich", "andrey@mail.com"],
      [3, 'Alex "s1mple"', "s1mple@mail.com"]
    ];

    expect(csvGenerator(data)).toBe(
      '1,Ivan Ivanovich,ivan@mail.com\n' +
      '2,"Andrey, Andreevich",andrey@mail.com\n' +
      '3,"Alex ""s1mple""",s1mple@mail.com'
    );
  });
});