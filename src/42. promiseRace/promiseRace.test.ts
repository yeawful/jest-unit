import promiseRace from "./promiseRace";

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

    const result = await promiseRace([firstPromise, secondPromise, thirdPromise]);
    expect(result).toEqual(100);
  });

  test("test2 error", async () => {
    const firstPromise = new Promise((resolve) =>
      setTimeout(() => resolve(300), 300)
    );
  
    const secondPromise = new Promise((resolve, reject) =>
      setTimeout(() => reject("Error"), 100) // Ошибка завершится первой
    );
  
    const thirdPromise = new Promise((resolve) =>
      setTimeout(() => resolve(100), 200)
    );
  
    await expect(promiseRace([firstPromise, secondPromise, thirdPromise])).rejects.toEqual("Error");
  });
});