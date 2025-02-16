const optionalChaining = (obj: Record<string, any>, keys: string[]): any => {
  let current = obj;

  for (let key of keys) {
    if (current === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
};

export default optionalChaining;
