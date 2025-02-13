// Функция findAllIdx(arr, value) возвращает массив индексов элементов с указанным значением.

const findAllIdx = (arr, value) => {
  const allIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      allIndex.push(i);
    }
  }
  return allIndex;
};

module.exports = findAllIdx;
