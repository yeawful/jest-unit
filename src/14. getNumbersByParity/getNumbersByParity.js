const getNumbersByParity = (arr, parity) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (parity == "even" && num % 2 == 0) {
      result.push(num);
    }

    if (parity == "odd" && num % 2 !== 0) {
      result.push(num);
    }
  }

  return result;
};

module.exports = getNumbersByParity;
