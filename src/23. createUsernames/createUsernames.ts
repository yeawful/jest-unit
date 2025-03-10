// *Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username.
// Поле username создается путем конкатенации firstName в нижнем регистре, первой буквы lastName в нижнем регистре и года рождения пользователя,
// который необходимо вычислить из текущей даты и возраста пользователя.
// Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.*

// 1. *Данные всегда будут передаваться в указаном ниже формате.*
// 2. *Возраст представлен в виде целого числа.*
// 3. *Фамилия всегда будет в формате "N.", где N - первая буква фамилии.*
// 4. *Порядок объектов в массиве должен сохраняться.*
// 5. *Порядок полей в объекте не важен.*

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface UserWithUsername extends User {
  username: string;
  birthYear: number;
}

const createUsernames = (users: User[]): UserWithUsername[] => {
  const currentYear = new Date().getFullYear();

  return users.map((user) => {
    const birthYear = currentYear - user.age; // Вычисляем год рождения
    const username = `${user.firstName.toLowerCase()}${user.lastName[0].toLowerCase()}${birthYear}`;

    return {
      ...user,
      username,
      birthYear,
    };
  });
};

export default createUsernames;
