type ItemType = number | string;

const replaceItemsClear = (arr: ItemType[], item: ItemType, replaceItem: ItemType): ItemType[] => {
  return arr.map((currentValue) => {
    if (currentValue === item) {
      return replaceItem;
    } else {
      return currentValue;
    }
  });
};

const replaceItemsMutate = (arr: ItemType[], item: ItemType, replaceItem: ItemType): ItemType[] => {
  arr.forEach((currentValue, index, array) => {
    if (currentValue === item) {
      array[index] = replaceItem;
    }
  });
  return arr;
};

export { replaceItemsClear, replaceItemsMutate };
