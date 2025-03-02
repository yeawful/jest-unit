// Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.

// Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

// ### **Методы**

// - `getAge()` - Возвращает возраст владельца счета

// ### **Свойства**

// - `firstName` - Имя
// - `lastName` - Фамилия
// - `fullName` - Имя вместе с фамилией, вычислямое свойство (используем геттер)

// ### **Методы**

// - `addMoney(amount, description)` - Положить деньги на аккаунт с комментарием к переводу
// - `withdrawMoney(amount, description)` - Вывести деньги с аккаунта с комментарием к переводу
// - `getAmount()` - Получить текущее состояние счета
// - `getAccountHistory()` - Возвращает массив с объектами формата `{ timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }`. Поле target может иметь значения `in` или `out`.
// - `transfer(fromAccount, toAccount, amount)` - статический метод, переводит деньги с одного счета на другой

// ### **Свойства**

// - `person` - Владелец счета



// Объявляем класс Person и свойства имени, фамилии, даты рождения.
class Person {
  firstName: string;
  lastName: string;
  birthday: Date;

  // Объявляем конструктор класса, который принимает имя, фамилию и дату рождения в формате строки. Присваиваем переданные значения соответсвующим свойствам.
  constructor(firstName: string, lastName: string, birthday: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
  }

  // Метод getAge, который вычисляет возраст человека.
  getAge(): number {
    const today = new Date(); // Текущая дата.
    const birthDate = this.birthday; // Дата рождения.
    let age = today.getFullYear() - birthDate.getFullYear(); // Разница в годах.
  
    // Проверяем, был ли уже день рождения в этом году.
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--; // Если день рождения еще не наступил, уменьшаем возраст на 1.
    }
  
    return age;
  }
}

// Объявляем класс Account и свойства для владельца счета, баланса и операций. Каждая операция содержит временную метку, тип операции, сумму и описание.
class Account {
  person: Person;
  amount: number;
  transactions: { timestamp: number; target: "in" | "out"; amount: number; description: string }[];

  // Объявляем конструктор класса, который принимает владельца счета и баланс. Присваиваем переданные значения соответсвующим свойствам (для операциий - пустой массив)
  constructor(person: Person, amount: number) {
    this.person = person;
    this.amount = amount;
    this.transactions = [];
  }

  // Метод для добавления денег на счет. Добавляем операцию снятия в историю и увеличиваем баланс счета.
  addMoney(amount: number, description: string) {
    this.transactions.push({ timestamp: Date.now(), target: "in", amount, description });
    this.amount += amount;
  }

  // Метод для снятия денег на счет. Добавляем операцию снятия в историю и уменьшаем баланс счета.
  withdrawMoney(amount: number, description: string) {
    this.transactions.push({ timestamp: Date.now(), target: "out", amount, description });
    this.amount -= amount;
  }

  // Метод для получения текущего состояния счета. Возвращаем текущий баланс.
  getAmount(): number {
    return this.amount;
  }

  // Метод для получения истории операций. озвращает массив операций.
  getAccountHistory(): { timestamp: number; target: "in" | "out"; amount: number; description: string }[] {
    return this.transactions;
  }

  // Статический метод для перевода денег между счетами. 
    // Снимаем деньги с одного счета счета.
    // Добавляем деньги на другой счет.
  static transfer(fromAccount: Account, toAccount: Account, amount: number) {
    fromAccount.withdrawMoney(amount, `перевод ${toAccount.person.firstName}`);
    toAccount.addMoney(amount, `от ${fromAccount.person.firstName}`);
  }
}

export { Person, Account };