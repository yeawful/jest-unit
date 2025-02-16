const getStringCount = (obj: any): number => {
  let strings: number = 0;

  if (typeof obj === "string") {
    strings += 1;
  }

  if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        strings += getStringCount(obj[key]);
      }
    }
  }

  return strings;
};

export default getStringCount;
