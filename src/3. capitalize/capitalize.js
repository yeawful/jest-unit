// Реализуйте функцию capitalize, которая делает первые буквы слов заглавными, а остальные строчными.

const capitalize = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

module.exports = capitalize;
