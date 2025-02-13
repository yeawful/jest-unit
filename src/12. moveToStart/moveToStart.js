const moveToStart = (arr, n) => {
  if (n >= arr.length) {
    return [...arr];
  }

  const result = [];

  for (let i = arr.length - n; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < arr.length - n; i++) {
    result.push(arr[i]);
  }

  return result;
};

module.exports = moveToStart;
