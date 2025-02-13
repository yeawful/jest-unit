const optionalChaining = (obj, keys) => {
  let current = obj;

  for (let key of keys) {
    if (current === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
};

module.exports = optionalChaining;
