import sumFileSizes from "./sumFileSizes";

describe("sumFileSizes", () => {
  it("test1", (done) => {
    sumFileSizes("testFile1", "testFile2", (sum) => {
      expect(sum).toBe(65 + 48);
      done();
    });
  });
});