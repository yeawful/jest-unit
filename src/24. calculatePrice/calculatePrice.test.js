const calculatePrice = require("./calculatePrice");

describe("calculatePrice", () => {
  test("test1", () => {
    const data = [
      {
        type: "food",
        price: 130,
      },
      {
        type: "clothes",
        price: 7300,
      },
      {
        type: "other",
        price: 1400,
      },
    ];
    expect(calculatePrice(data)).toBe(8830);
    expect(calculatePrice([])).toBe(0);
    expect(calculatePrice()).toBe(0);
  });
});
