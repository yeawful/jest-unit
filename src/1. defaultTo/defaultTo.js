// Реализуйте функцию `defaultTo`, которая принимает значение первым аргументом и значение по умолчанию вторым.
// Если первое значение `null`, `NaN` или `undefined`, то должно быть возвращено значение по умолчанию.
// В остальных случаях возвращается первый аргумент.

const defaultTo = (a, b = 10) => {
  if (a !== undefined && a !== null && !Number.isNaN(a)) {
    return a;
  }
  return b;
};

module.exports = defaultTo;
