// Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке. Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

type LettersCountResult = {
  [key: string]: number,
};

const lettersCount = (str: string): LettersCountResult => {
  const lowerCase = str.toLowerCase();
  const result: LettersCountResult = {};

  for (let char of lowerCase) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
};

export default lettersCount;
