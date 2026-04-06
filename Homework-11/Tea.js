import Drink from './Drink.js';

export default class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, additive) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.additive = additive;
  }

  updateAdditive(additive) {
    this.additive = additive;
    console.log(`Добавка изменена на: ${this.additive}`);
    return this.additive;
  }

  getInfo() {
    return `${super.getInfo()} | Вид: ${this.teaType}, Добавка: ${this.additive}`;
  }
}