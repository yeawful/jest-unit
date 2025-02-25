type NestedObject<T> = {
  [key: string]: NestedObject<T> | T;
};

const optionalChaining = <T>(obj: NestedObject<T>, keys: string[]): T | undefined => {
  let current: NestedObject<T> | T = obj;

  for (let key of keys) {
    if (current === undefined || typeof current !== 'object' || current === null) {
      return undefined;
    }
    current = (current as NestedObject<T>)[key];
  }

  return current as T;
};

export default optionalChaining;
