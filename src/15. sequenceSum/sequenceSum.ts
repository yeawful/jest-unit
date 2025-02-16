const sequenceSum = (begin: number, end: number): number => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;
