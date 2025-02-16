const hasArrays = (arr: any[]): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return true;
    }
  }
  return false;
};

export default hasArrays;
