import promiseAll from "./promiseAll";

describe("promiseRace", () => {
  test("test1", async () => {
    const firstPromise = new Promise((resolve) =>
      setTimeout(() => resolve(300), 300)
    );
    
    const secondPromise = new Promise((resolve) =>
      setTimeout(() => resolve(200), 200)
    );
    
    const thirdPromise = new Promise((resolve) =>
      setTimeout(() => resolve(100), 100)
    );

    const result = await promiseAll([firstPromise, secondPromise, thirdPromise]);
    expect(result).toEqual([300, 200, 100]);
  });
});