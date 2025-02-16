// Напишите функцию, которая сравнивает два числа с определенной погрешностью.

const compareWithPrecision = (a: number, b: number, epsilon: number = 0.00001): boolean => {
  if (Math.abs(a - b) < epsilon) {
    return true;
  }
  return false;
};

export default compareWithPrecision;
