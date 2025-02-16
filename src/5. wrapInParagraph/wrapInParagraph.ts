// Функция wrapInParagraph оборачивает строки в HTML-теги <p>.

const wrapInParagraph = (text: string): string => text
    .split(" ")
    .map((line) => `<p>${line}</p>`)
    .join(" ");

export default wrapInParagraph;
