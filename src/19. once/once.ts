// Функция once позволяет вызвать переданную функцию только один раз.

type Fun = () => void;

const once = (fun: Fun): Fun => {
  let funUse = false;

  return (): void => {
    if (!funUse) {
      funUse = true;
      fun();
    }
  };
};

export default once;
