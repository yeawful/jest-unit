import debounce from "./debouncedFn";

describe("debouncedFn", () => {
  jest.useFakeTimers(); // Используем фейковые таймеры

  test("test1", () => {
    let counter = 0;
    const fn = () => {
      counter++;
    };

    const debouncedFn = debounce(fn, 200);

    debouncedFn(); // первый вызов
    setTimeout(debouncedFn, 100); // вызов через 100 мс
    setTimeout(debouncedFn, 200); // вызов через 200 мс
    setTimeout(debouncedFn, 300); // вызов через 300 мс
    setTimeout(debouncedFn, 400); // вызов через 400 мс

    // Продвигаем время на 500 мс, чтобы все таймеры сработали
    jest.advanceTimersByTime(600);

    // Ожидаем, что функция выполнится только один раз
    expect(counter).toBe(1);
  });
});