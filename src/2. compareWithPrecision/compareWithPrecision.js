// Напишите функцию, которая сравнивает два числа с определенной погрешностью.

const compareWithPrecision = (a, b, epsilon = 0.00001) => {
  if (Math.abs(a - b) < epsilon) {
    return true;
  }
  return false;
};

module.exports = compareWithPrecision;
