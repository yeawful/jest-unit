// В данном задании вам нужно будет реализовать полифл Object.create.
// Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. 
// Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Ваша функция должна принимать два параметра:
// 1. prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
// 2. properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
// Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.
// В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.
// Подсказки:
// - Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
// - В JavaScript все является объектом, кроме: null и undefined.
// - NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.



// Переопределяем метод Object.create, используем дженерик T, который может быть object или null. 
// Функция принимает 2 аргумента: proto с типом дженерика Т и propertiesObject содержащий дескрипторы свойств, которые будут добавлены в новый объект. Возвращаем object.
Object.create = function<T extends object | null>(proto: T, propertiesObject?: PropertyDescriptorMap): object {
  
  // Проверяем, что proto передан(через undefined) и является либо объектом, либо null. Если proto не передан или не является объектом/null, выбрасываем ошибку TypeError
  if (proto === undefined || (proto !== null && typeof proto !== 'object')) {
    throw new TypeError('TypeError');
  }

  // Создаем пустой объект. Используем приведение типов (as), чтобы указать, что тип объекта object
  const object = {} as object;

  // Устанавливаем прототип созданного объекта. Если proto === null, прототип будет null.
  Object.setPrototypeOf(object, proto);

  // Проверяем, передан ли propertiesObject(через undefined). Если propertiesObject передан, добавляем свойства в созданный объект с помощью Object.defineProperties.
  if (propertiesObject !== undefined) {
    Object.defineProperties(object, propertiesObject);
  }

  // Возвращаем созданный объект.
  return object;
};

export default Object.create;