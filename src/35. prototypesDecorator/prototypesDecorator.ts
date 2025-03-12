// Необходимо добавить возможность логирования в функцию `add` класса `Addition`
// Используя прототип класса `Addition` добавить декоратор к функции `add`, дающий возможность логировать ее вызов
// При этом результат выполнения `add` должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'
// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.


// Объявляем класс Addition и объявляем свойство класса num с типом number
class Addition {
  num: number;

  // Создаем конструктор, который принимает параметр num
    // Присваиваем переданное значение num свойству this.num.
  constructor(num: number) {
    this.num = num;
  }

  // Объявляем метод add, который принимает произвольное количество чисел в виде массива (...nums) и возвращает число.
    // Вспомогательная функция sum, которая складывает два числа.
    // Возвращаем сумму внутреннего числа (this.num) и всех переданных чисел (nums) с помощью метода reduce
  add(...nums: number[]): number {
    const sum = (a: number, b: number): number => a + b;
    return this.num + nums.reduce(sum);
  }
}

// Объявляем функцию-декоратор prototypesDecorator, которая принимает функцию f (метод).
  // Возвращаем новую функцию, которая принимает произвольное количество чисел (...nums).
    // Выводим в консоль "called", логируем вызов метода
    // Вызываем оригинальную функцию (f) с передачей текущего контекста (this) и аргументов (nums).
const prototypesDecorator = (f: Function) => {
  return function (this: any, ...nums: number[]) {
    console.log("called");
    return f.apply(this, nums);
  };
};

// Применяем декоратор prototypesDecorator к методу add класса Addition.
Addition.prototype.add = prototypesDecorator(Addition.prototype.add);

export default Addition;