// Реализуйте функцию `defaultTo`, которая принимает значение первым аргументом и значение по умолчанию вторым.
// Если первое значение `null`, `NaN` или `undefined`, то должно быть возвращено значение по умолчанию.
// В остальных случаях возвращается первый аргумент.

const defaultTo = (a: any, b: number = 10): any => {
  if (a !== undefined && a !== null && !Number.isNaN(a)) {
    return a;
  }
  return b;
};

export default defaultTo;
