const replaceItemsClear = (arr: (number | string)[], item: number | string, replaceItem: number | string): (number | string)[] => {
  return arr.map((currentValue) => {
    if (currentValue === item) {
      return replaceItem;
    } else {
      return currentValue;
    }
  });
};

const replaceItemsMutate = (arr: (number | string)[], item: number | string, replaceItem: number | string): (number | string)[] => {
  arr.forEach((currentValue, index, array) => {
    if (currentValue === item) {
      array[index] = replaceItem;
    }
  });
  return arr;
};

export { replaceItemsClear, replaceItemsMutate };
