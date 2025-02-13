// Функция возвращает Fizz, Buzz или FizzBuzz, если число кратно 3, 5 или обоим числам соответственно.

const fizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

module.exports = fizzBuzz;
