const createObjectCalculator = (valueA, valueB) => {
  const calculator = {
    a: valueA,
    b: valueB,

    read(a, b) {
      this.a = a;
      this.b = b;
    },

    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    },
  };

  return calculator;
};

module.exports = createObjectCalculator;
