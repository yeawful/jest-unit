import { Person, Account } from "./personAccount";

describe("defaultTo", () => {
  test("test1", () => {

    const alex = new Person('Alexey', 'Petrov', '1994-05-22');
    const alexAccount = new Account(alex, 1000);
    const helen = new Person('Helen', 'Smith', '1990-06-06');
    const helenAccount = new Account(helen, 400);

    alexAccount.addMoney(1000, 'Зарплата');
    const amount = alexAccount.getAmount();
    alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
    Account.transfer(alexAccount, helenAccount, 100);

    expect(helenAccount.getAmount()).toBe(500);
    expect(alexAccount.getAmount()).toBe(1700);
  });
});