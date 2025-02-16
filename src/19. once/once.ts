// Функция once позволяет вызвать переданную функцию только один раз.

type Fun = () => void;

const once = (fun: Fun) => {
  let funUse = false;

  return () => {
    if (!funUse) {
      funUse = true;
      fun();
    }
  };
};

export default once;