export default class Watch {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.isRunning = false;
  }

start() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} заведены! Время идет`);
  }

stop() {
    this.isRunning = false;
    console.log(`${this.brand} ${this.model} остановлены`);
  }

showInfo() {
    const status = this.isRunning ? 'идут' : 'остановлены';
    console.log(`${this.brand} ${this.model} | Цена: $${this.price} | Состояние: ${status}`);
  }
}