import { isEmpty, isEmptyWithProtos } from "./isEmpty";

describe("isEmpty", () => {
  test("test isEmpty", () => {

    const obj = Object.create(null);

    expect(isEmpty(obj)).toBe(true);
    
    expect(isEmpty({ prop: 'value' })).toBe(false);
  });

  test("test isEmptyWithProtos", () => {

    const protoObj = Object.create(null);
    const obj = Object.create(protoObj);

    expect(isEmptyWithProtos(obj)).toBe(true);
    
    expect(isEmptyWithProtos({})).toBe(true);
  });
});