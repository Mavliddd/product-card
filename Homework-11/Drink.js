export default class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name}, ${this.size},${this.#temperature} °С, ${this.price} руб.`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #makeDrink() {
    console.log(`Приготовление напитка: ${this.getInfo()}`);
  }

  serve() {
    this.#makeDrink();
    console.log(`Ваш ${this.name} готов!`);
  }
}

