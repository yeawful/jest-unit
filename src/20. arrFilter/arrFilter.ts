// *Для этой задачи вам нужно будет ознакомиться с [методом массива filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), который принимает функцию-коллбэк для фильтрации массива.*

// *Реализуйте набор готовых к использованию функций для arr.filter:*

// *inRange(a, b) – число находится между a и b (включительно).*

// *Если аргумент или элемент массива можно привести к числу,*

// *то функция должна сначала приводить его к числу, а потом проверять условие.*

// *Если a > b, то функция должна возвращать false для всех элементов массива*

// *inArray([...]) – значение находится в данном массиве.*

// *notInArray([...]) – значение не находится в данном массиве.*

// *Они должны использоваться таким образом:*

// *arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).*

// *arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива*

// *arr.filter(notInArray([1,2,3])) – выбирает только те элементы,*

// *которые не совпадают ни с одним из элементов массива*

type FilterFunction = (element: any) => boolean;

const arrFilter = () => ({
  inRange:
    (a: number, b: number): FilterFunction =>
    (element: any): boolean => {
      if (a > b) {
        return false;
      }

      const num = Number(element);

      if (!isNaN(num) && num >= a && num <= b) {
        return true;
      } else {
        return false;
      }
    },

  inArray:
    (array: any[]): FilterFunction =>
    (element: any): boolean => {
      return array.includes(element);
    },

  notInArray:
    (array: any[]): FilterFunction =>
    (element: any): boolean => {
      return !array.includes(element);
    },
});

export default arrFilter;
