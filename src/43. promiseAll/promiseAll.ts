// Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
    return Promise.all(promises);
}

export default promiseAll;