// Функция once позволяет вызвать переданную функцию только один раз.

const once = (fun) => {
  let funUse = false;

  return () => {
    if (!funUse) {
      funUse = true;
      fun();
    }
  };
};

module.exports = once;
