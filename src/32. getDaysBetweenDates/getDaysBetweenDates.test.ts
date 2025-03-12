import getDaysBetweenDates from "./getDaysBetweenDates";

describe("getDaysBetweenDates", () => {
  test("test1", () => {
    expect(getDaysBetweenDates('1-1-2020', '1-2-2020')).toEqual(1);
    
    expect(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))).toEqual(366);
     
    expect(getDaysBetweenDates('1-1-2020', 'дата')).toBeNaN();
  });
});