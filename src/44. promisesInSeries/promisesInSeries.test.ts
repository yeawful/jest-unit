import promisesInSeries from "./promisesInSeries";

describe("promisesInSeries", () => {
  test("test1", async () => {
    const firstPromise = () =>
      new Promise((resolve) => setTimeout(() => resolve(300), 300));
    
    const secondPromise = (input: unknown) =>
      new Promise((resolve) => setTimeout(() => resolve((input as number) + 200), 200));
    
    const thirdPromise = (input: unknown) =>
      new Promise((resolve) => setTimeout(() => resolve((input as number) + 100), 100));

    const result = await promisesInSeries([firstPromise, secondPromise, thirdPromise]);
    
    expect(result).toEqual(600);
  });
});