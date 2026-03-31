export default class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(`Кафе ${this.name} находится по адресу: ${this.location}`);
  }

  orderDrink(drink) {
    console.log('Ваш заказ принят. Ожидайте.');
    drink.serve();
  }
}