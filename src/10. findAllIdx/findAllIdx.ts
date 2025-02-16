// Функция findAllIdx(arr, value) возвращает массив индексов элементов с указанным значением.

const findAllIdx = <T>(arr: T[], value: T): number[] => {
  const allIndex: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      allIndex.push(i);
    }
  }
  return allIndex;
};

export default findAllIdx;
