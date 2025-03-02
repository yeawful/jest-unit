// Реализуйте функционал для работы с книгами в библиотеке:

// - создание книги(добавление новой книги в библиотеку)
// - Выдача книги читателю
// - Получение книги от читателя
// - Получение у кого книга сейчас находится

// Необходимо создать контруктор объектов `Book`, который будет создавать объекты со следующими полями:

// - `name` - имя книги
// - `author` - имя автора
// - `year` - год книги
// - `reader` - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно `null`

// Необходимо реализовать на прототипе следующие методы работы с книгой:

// - `isAvailable()` // `true/false` - доступна ли книга для выдачи или она у кого-то на руках
// - `takeBook(readerName)` - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в `reader`, возвращает `true`, если выдача книги возможна и она произведена, `false`, если книга уже выдана
// - `returnBook()` - регистрирует возврат книги, устанавливает `reader` в `null`, возвращает `true`, если книга была на руках, `false` если книга итак в библиотеке
// - `changeBookName(newBookName)` - изменяет название книги на `newBookName`, возвращает `true/false`, в зависимости от результата
// - `changeAuthorName(newAuthorName)` - изменяет имя автора на `newAuthorName`, возвращает `true/false` в зависимости от результата
// - `getCurrentReader()` - возвращает имя текущего читателя или `null`, если книга доступна для выдачи


// Объявляем класс Book(книга в библиотеке) и объявляем свойства класса, типизируем их.
class Book {
    name: string;
    author: string;
    year: number;
    reader: string | null;
  
    // Создаем конструктор, который принимает параметры name, author и year. 
        // Присваиваем переданные параметры свойствам (reader null - книга доступна)
    constructor(name: string, author: string, year: number) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.reader = null;
    }    
  
    // Метод isAvailable проверяет, доступна ли книга.
        // Возвращаем true, если reader равен null.
        // Иначе возвращаем false
    isAvailable = (): boolean => {
        if (this.reader === null) {
            return true;
        } else {
            return false;
        }
    }
    
    // Метод takeBook позволяет взять книгу читателю. Принимает имя читателя (readerName). 
        // Если книга доступна то устанавливаем текущего читателя.
            // Возвращаем true, если книга успешно взята.
        // Иначе возвращаем false
    takeBook = (readerName: string): boolean => {
        if (this.isAvailable()) {
            this.reader = readerName;
            return true;
        } else {
            return false;
        }
    };
    
    // Метод returnBook позволяет вернуть книгу в библиотеку.
        // Проверяем, занята ли книга.
            // Если книга занята, освобождаем её (reader = null).
            // Возвращаем true, если книга успешно возвращена.
        // Возвращает false, если книга доступна
    returnBook = (): boolean => {
        if (!this.isAvailable()) {
            this.reader = null;
            return true;
        } else {
            return false;
        }
    };
  
    // Метод changeBookName изменяет название книги и принимает новое название
        // Устанавливаем новое название книги.
        // Возвращаем true, если название измененилось.
    changeBookName = (newBookName: string): boolean => {
        this.name = newBookName;
        return this.name === newBookName;
    };
  
    // // Метод changeAuthorName изменяет имя автора и принимает новое имя
        // Устанавливаем новое имя.
        // Возвращаем true, если имя измененилось.
    changeAuthorName = (newAuthorName: string): boolean => {
        this.author = newAuthorName;
        return this.author === newAuthorName;
    };
  
    // Метод getCurrentReader возвращает имя текущего читателя книги.
        // Проверяем, занята ли книга.
            // Возвращаем имя текущего читателя, если книга занята.
        // Возвращаем null, если книга доступна.
    getCurrentReader = (): string | null => {
        if (!this.isAvailable()) {
            return this.reader;
        } else {
            return null;
        }
    };
}

export default Book;
