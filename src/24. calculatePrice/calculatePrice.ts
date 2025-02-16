// *Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей.
// Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.*

// *Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.*

interface Item {
  price: number;
}

const calculatePrice = (items: Item[]): number => {
  if (!items || items.length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < items.length; i++) {
    result += items[i].price;
  }

  return result;
};

export default calculatePrice;
