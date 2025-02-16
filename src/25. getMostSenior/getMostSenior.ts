// *Дан список информации о людях.*

// *Необходимо вернуть массив, содержащий самого старшего человека в списке.
// Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.*

// *Возраст хранится в поле age.*

interface Person {
  age: number;
}

const getMostSenior = (people: Person[]): Person[] => {
  let maxAge = 0;

  people.forEach((person) => {
    if (person.age > maxAge) {
      maxAge = person.age;
    }
  });

  return people.filter((person) => person.age === maxAge);
};

export default getMostSenior;
