// Функция wrapInParagraph оборачивает строки в HTML-теги <p>.

const wrapInParagraph = (text) => {
  return text
    .split(" ")
    .map((line) => `<p>${line}</p>`)
    .join(" ");
};

module.exports = wrapInParagraph;
