import Drink from './Drink.js';

export default class Smoothie extends Drink {
  constructor(name, size, price, temperature, fruits) {
    super(name, size, price, temperature);
    this.fruits = fruits;
  }

  updateFruits(fruits) {
    this.fruits = fruits;
    console.log(`Фрукты изменены на: ${this.fruits}`);
    return this.fruits;
  }

  getInfo() {
    return `${super.getInfo()} | Фрукты: ${this.fruits}`;
  }
}