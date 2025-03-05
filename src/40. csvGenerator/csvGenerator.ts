// Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и возвращать строку 
// О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")
// Допустимые значения в качестве элементов массива - числа и строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"
// Функция принимает: data - массив массивов, содержашие числа или строки
// Функция возвращает: Строку в формате CSV



// Объявляем функцию csvGenerator, которая принимает двумерный массив data, где каждый элемент — это число или строка.
const csvGenerator = (data: (number | string)[][]) => {
    // Проходим по каждому элементу внешнего массива (element — это строка данных). Используем метод map.
    const newData = data.map((element) => {
        // Проходим по каждому элементу внутреннего массива (inner — это ячейка строки). Используем метод map.
        return element.map((inner) => {
            // Проверяем, является ли inner строкой и содержит ли она запятые или кавычки. Если да, обрабатываем её.
            if (typeof inner === 'string' && (inner.includes(',') || inner.includes('"'))) {
            // Оборачиваем строку в кавычки ("). Удваиваем кавычки внутри строки с помощью replace(/"/g, '""'), чтобы экранировать их в CSV.
            return `"${inner.replace(/"/g, '""')}"`;
        }
        // Если элемент не требует обработки (не строка или не содержит запятых/кавычек), возвращаем его как есть.
        return inner;
      });
    });
// Преобразуем каждый массив строки в строку CSV, объединяя элементы запятыми.
const arrForString = newData.map(element => element.join(','));
// Объединяем все строки CSV в одну строку, разделяя их переносами строк (\n). Возвращаем итоговую строку в формате CSV.
return arrForString.join('\n');
};

export default csvGenerator;