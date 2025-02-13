const replaceItemsClear = (arr, item, replaceItem) => {
  return arr.map((currentValue) => {
    if (currentValue === item) {
      return replaceItem;
    } else {
      return currentValue;
    }
  });
};

const replaceItemsMutate = (arr, item, replaceItem) => {
  arr.forEach((currentValue, index, array) => {
    if (currentValue === item) {
      array[index] = replaceItem;
    }
  });
  return arr;
};

module.exports = replaceItemsClear;
module.exports = replaceItemsMutate;
