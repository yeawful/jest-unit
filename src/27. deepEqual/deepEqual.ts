// Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.
// Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму.

const deepEqual = <T>(x: T, y: T): boolean => {
  if (x === y) return true;

  if (typeof x === "object" && x !== null && typeof y === "object" && y !== null) {
    const keysX = Object.keys(x) as (keyof T)[];
    const keysY = Object.keys(y) as (keyof T)[];

    if (keysX.length !== keysY.length) return false;

    for (const key of keysX) {
      if (!Object.hasOwnProperty.call(y, key)) return false;

      if (typeof x[key] === "object" && typeof y[key] === "object") {
        if (!deepEqual(x[key], y[key])) return false;
      } else if (x[key] !== y[key]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

export default deepEqual;


// Объявляем стрелочную функцию deepEqual с пустым дженериком T (для любых типов) которая принимает два аргумента x и y с типами T (т.к. они могут быть любого типа).
// Указываем сразу тип возвращаемого значения - boolean.

  // При условии если x и y строго равны, возвращаем true.

  // Проверяем, являются ли x и y объектами (и не null, т.к. он тоже возвращает "object").
    // Объявляем переменные keysX и keysY, чтобы получить массив ключей объектов x и y с помощью метода Object.keys.
    // Используем as (keyof T)[], чтобы TypeScript правильно проверяk типы при доступе к свойствам объектов.

    // При условии если количество ключей в объектах разное (проверяем через свойство length) - возвращаем false.

    // С помощью цикла for of проходим по каждому ключу объекта x.
      // С помощью метода !Object.hasOwnProperty проверяем, есть ли такой же ключ в объекте y. При условии если нет ключа - возвращаем false.
      // (Метод call для безопасной проверки наличия ключа в объекте, позволяет вызвать hasOwnProperty, даже если у объекта y нет собственного метода hasOwnProperty)

      // При условии если если значения по текущему ключу в x и y — это объекты, переходим к рекурсивному сравнению.
        // Рекурсивно вызываем !deepEqual для сравнения вложенных объектов. Если они не равны - возвращаем false.

      // Если значения не объекты, то сравниваем их. 
        // Если они не равны - возвращаем false.

    // Если все ключи и значения совпали, возвращаем true.

  // Если x и y не объекты или один из них null, возвращаем false.