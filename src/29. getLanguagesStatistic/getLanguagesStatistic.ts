// Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу подвести итоги 2019 года по популярности использования языков программирования. 
// На входе функция получает массив отзывов пользователей. Необходимо вернуть объект в формате { languageName: count, anotherLanguageName: anotherCount, ... }, 
// где languageName - название языка в строке, а count - число отзывов, которые оставили программисты, использующие этот язык. 
// При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году. Год отзыва хранится в поле year, язык - в поле language.

const getLanguagesStatistic = (feedbacks: { year: number; language: string }[]) => {
  return feedbacks.reduce((result: Record<string, number>, object) => {
      if (object.year === 2019) {
          if (!result[object.language]) {
            result[object.language] = 1;
          } else {
            result[object.language]++;
          }
      }
      return result;
  }, {});
};

export default getLanguagesStatistic;

// Объявляем стрелочную функцию getLanguagesStatistic, которая принимает массив отзывов feedbacks [], который состоит из объекта {}. 
// Объект включает в себя свойства year с типом number и language с типом string. 

  // С помощью метода reduce проходим по каждому элементу массива feedbacks. 
  // Колбэк-функция в методе reduce принимает аргументы result для промежуточного результата (с заданной типизацией string и number) и текущий элемент массива object. 

    // Проверяем, относится ли текущий отзыв к 2019 году.

        // Проверяем, есть ли текущий язык (object.language) в result.
          // Если язык еще не встречался, добавляем его в result с начальным значением 1.
        // Если язык уже есть в result, увеличиваем его счетчик на 1.

    // Возвращаем обновленный result для следующей итерации.

  // Завершаем метод reduce, передаем начальное значение result — пустой объект {}.