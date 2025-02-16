interface Calculator {
  a: number;
  b: number;
  read(a: number, b: number): void;
  sum(): number;
  mul(): number;
}

const createObjectCalculator = (valueA: number, valueB: number): Calculator => {
  const calculator: Calculator = {
    a: valueA,
    b: valueB,

    read(a: number, b: number): void {
      this.a = a;
      this.b = b;
    },

    sum(): number {
      return this.a + this.b;
    },

    mul(): number {
      return this.a * this.b;
    },
  };

  return calculator;
};

export default createObjectCalculator;
