// objectCreate.test.ts
import ObjectCreate from "./objectCreate";

describe("Object.create", () => {
  const A = {
    objectName: 'Object A',
    getObjectName: function() {
      return `This is ${this.objectName}!`;
    },
  };

  const B = ObjectCreate(A, {
    objectName: {
      value: 'Object B',
    },
  });

  test("A.getObjectName", () => {
    expect(A.getObjectName()).toBe("This is Object A!");
  });

  test("B.getObjectName", () => {
    expect(B.getObjectName()).toBe("This is Object B!");
  });

  test("A.hasOwnProperty('getObjectName')", () => {
    expect(A.hasOwnProperty('getObjectName')).toBe(true);
  });

  test("A.hasOwnProperty('objectName')", () => {
    expect(A.hasOwnProperty('objectName')).toBe(true);
  });

  test("B.hasOwnProperty('getObjectName')", () => {
    expect(B.hasOwnProperty('getObjectName')).toBe(false);
  });

  test("B.hasOwnProperty('objectName')", () => {
    expect(B.hasOwnProperty('objectName')).toBe(true);
  });
});