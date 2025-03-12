import unique from "./unique";

describe("unique", () => {
  test("test1", () => {

    const data1 = [1, 2, 3, 3, 4, 4];

    expect(unique(data1)).toEqual([1, 2, 3, 4]);
  });

  test("test2", () => {

    const obj = { name: 'John' };
    const data2 = [obj, obj, obj, { name: 'John' }];
    const result = unique(data2);

    expect(result).toEqual([{ name: 'John' }, { name: 'John' }]);
    
    expect(result[0] === obj).toEqual(true);
   
    expect(result[1] === obj).toEqual(false);
  });
});