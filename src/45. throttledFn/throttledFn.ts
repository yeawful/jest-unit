// Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

// - Функция throttle должна вызывать функцию и запускать таймер, равный времени задержки, в течение которого функция не может быть вызвана заново. 
// Throttle необходим для того, чтобы обеспечить возможность вызова функции не чаще, чем указанное время задержки. 
// Если время задержки равно 500 мс, то при вызове функции, возвращенной из throttle, каждые 100 мс 10 раз подряд функция будет вызвана лишь три раза:
//     - первый вызов функции на 0мс (первая попытка вызова функции после 0 мс задержки),
//     - второй на 500 мс (пятая попытка вызова функции после 500 мс задержки)
//     - и третий на 1000 мс (десятая попытка вызова функции после 1000 мс задержки).

const throttle = <T extends (...args: unknown[]) => unknown>(fn: T,throttleTime: number) => {
    let lastCallTime = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
    return function (this: unknown, ...args: unknown[]): void {
      const now = Date.now();
  
      if (now - lastCallTime >= throttleTime) {
        lastCallTime = now;
        fn.apply(this, args);
      } else if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastCallTime = Date.now();
          fn.apply(this, args);
          timeoutId = null;
        }, throttleTime - (now - lastCallTime));
      }
    };
  };
  
  export default throttle;