// Реализуйте функцию reverseLongWords, которая переворачивает слова с длиной 5 и более символов.

const reverseLongWords = (str: string): string => str
    .split(" ")
    .map((word: string) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");

export default reverseLongWords;
