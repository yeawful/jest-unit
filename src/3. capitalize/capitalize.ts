// Реализуйте функцию capitalize, которая делает первые буквы слов заглавными, а остальные строчными.

const capitalize = (str: string): string => str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export default capitalize;
