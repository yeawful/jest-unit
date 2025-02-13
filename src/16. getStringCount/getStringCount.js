const getStringCount = (obj) => {
  let strings = 0;

  if (typeof obj === "string") {
    strings += 1;
  }

  if (typeof obj === "object") {
    for (let key in obj) {
      strings += getStringCount(obj[key]);
    }
  }

  return strings;
};

module.exports = getStringCount;
