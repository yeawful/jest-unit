// Реализуйте функцию reverseLongWords, которая переворачивает слова с длиной 5 и более символов.

const reverseLongWords = (str) => {
  return str
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
};

module.exports = reverseLongWords;
