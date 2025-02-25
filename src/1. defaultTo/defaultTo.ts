// Реализуйте функцию `defaultTo`, которая принимает значение первым аргументом и значение по умолчанию вторым.
// Если первое значение `null`, `NaN` или `undefined`, то должно быть возвращено значение по умолчанию.
// В остальных случаях возвращается первый аргумент.

const defaultTo = (a: number, b: number = 10): number => {
  if (!Number.isNaN(a)) {
    return a;
  }
  return b;
};

export default defaultTo;
