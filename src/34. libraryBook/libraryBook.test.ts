import Book from "./libraryBook";

describe("libraryBook", () => {
    let book: Book;

    beforeEach(() => {
      book = new Book("Война и Мир", "Лев Толстой", 1867);
    });

    test("isAvailable", () => {
      expect(book.isAvailable()).toBe(true);
    });

    test("takeBook", () => {
      expect(book.takeBook("Денис")).toBe(true);
      expect(book.getCurrentReader()).toBe("Денис");
    });

    test("takeBook2", () => {
        book.takeBook("Денис");
        expect(book.takeBook("Андрей")).toBe(false);
        expect(book.getCurrentReader()).toBe("Денис");
    });

    test("returnBook", () => {
        book.takeBook("Денис");
        expect(book.returnBook()).toBe(true);
        expect(book.isAvailable()).toBe(true);
    });

    test("returnBook", () => {
        expect(book.returnBook()).toBe(false);
    });

    test("changeBookName", () => {
        expect(book.changeBookName("Мир и Война")).toBe(true);
        expect(book.name).toBe("Мир и Война");
    });

    test("changeAuthorName", () => {
        expect(book.changeAuthorName("Толстый Лев")).toBe(true);
        expect(book.author).toBe("Толстый Лев");
    });

    test("getCurrentReader", () => {
        expect(book.getCurrentReader()).toBe(null);
    });

    test("getCurrentReader2", () => {
        book.takeBook("Денис");
        expect(book.getCurrentReader()).toBe("Денис");
    });
});