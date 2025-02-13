const sequenceSum = (begin, end) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + 1, end);
};

module.exports = sequenceSum;
