// Напишите функцию, которая принимает массив промисов и возвращает результат того, который завершился первым. 
// При этом если первый промис выдал ошибку - необходимо вернуть ее.

function promiseRace<T>(promises: Promise<T>[]): Promise<T> {
    return Promise.race(promises);
}

export default promiseRace;