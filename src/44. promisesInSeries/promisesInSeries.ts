// Напишите функцию, которая принимает массив асинхронных функций и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, 
// передавая в аргументы результат вызова предыдущей функции.

async function promisesInSeries<T>(asyncArrFunc: Array<(arg?: T) => Promise<T>>): Promise<T | undefined> {
  let result: T | undefined = undefined;
  
  for (const asyncFunc of asyncArrFunc) {
    result = await asyncFunc(result);
  }
  
  return result;
}

export default promisesInSeries;