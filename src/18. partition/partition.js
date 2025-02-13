// Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

// *Во время выполнения функция должна вызвать callback для каждого элемента массива array.*

// *Сигнатура функции callback*

// *callback(element) => boolean*

// *element - Элемент массива на котором была вызвана функция callback*

// *Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray*

// *Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray*

// *Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray*

// *Функция не должна менять изначальный массив*

const partition = (arr, callback) => {
  if (typeof callback !== "function") {
    callback = (element) => element;
  }

  let truthy = [];
  let falsey = [];

  for (let element of arr) {
    if (callback(element)) {
      truthy.push(element);
    } else {
      falsey.push(element);
    }
  }

  return [truthy, falsey];
};

module.exports = partition;
