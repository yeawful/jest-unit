// Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

const getDaysBetweenDates = (date1: string | Date, date2: string | Date): number => {
  if (date1 === undefined || date2 === undefined) {
    throw new TypeError('TypeError');
  }

  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  const ms1 = firstDate.getTime();
  const ms2 = secondDate.getTime();
  const hours1 = ms1 / 1000 / 3600;
  const hours2 = ms2 / 1000 / 3600;

  if (hours2 > hours1) {
    return Math.floor((hours2 - hours1) / 24);
  } else if (hours1 > hours2 && hours1 - hours2 < 24) {
    return 0;
  } else if (hours1 === hours2) {
    return 0;
  } else {
    return -(Math.floor((hours1 - hours2) / 24));
  }
};

export default getDaysBetweenDates;

// Объявляем стрелочную функцию getDaysBetweenDates, которая принимает два аргумента: 
// date1 и date2 (Аргументы могут быть строками (string) или объектами Date.). Возвращаем number

  // Проверяем, что оба аргумента переданы (не undefined).
    // Если один из аргументов отсутствует, выбрасываем ошибку TypeError.

  // Преобразуем date1 и date2 в объекты Date, если они были передан как строка.
  // Получаем время для firstDate и secondDate в миллисекундах с помощью метода getTime().
  // Преобразуем миллисекунды в часы, разделив на 1000 (секунды) и на 3600 (часы).

  // Проверяем, если date2 позже date1.
    // Если date2 позже date1, вычисляем разницу в часах, делим на 24 и округляем вниз до целого числа.
  // Проверяем, если date1 позже date2, но разница меньше 24 часов.
    // Если разница меньше 24 часов, то возвращаем 0.
  // Проверяем, если даты равны.
    // То возвращаем 0.
  // Если date1 позже date2 и разница больше 24 часов.
    // Возвращаем отрицательное количество дней, округленное вниз.