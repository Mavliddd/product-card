export default class Watch {
  constructor(brand, model, price, statusMessage, detailsMessage) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.isRunning = false;
    this.statusMessage = statusMessage;
    this.detailsMessage = detailsMessage;
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

showStatus() {
    console.log(`Статус: ${this.statusMessage}`);
    console.log(this.detailsMessage);
  }
}