import Drink from './Drink.js';

export default class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType , topping) {
    super(name, size, price, temperature)
    this.beanType = beanType;
    this.topping = topping;
  }

  updateTopping(newTopping) {
    this.topping = newTopping;
    console.log(`Добавка изменен на: ${this.topping}`);
    return this.topping;
  }

  getInfo() {
    return `${super.getInfo()} | Вид: ${this.beanType}, Добавка: ${this.topping}`;
  }
}
