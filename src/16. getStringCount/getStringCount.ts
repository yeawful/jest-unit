const getStringCount = (obj: unknown): number => {
  let strings: number = 0;

  if (typeof obj === "string") {
    strings += 1;
  }

  else if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      for (const item of obj) {
        strings += getStringCount(item);
      }
    }
    else {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          strings += getStringCount((obj as Record<string, unknown>)[key]);
        }
      }
    }
  }

  return strings;
};

export default getStringCount;
