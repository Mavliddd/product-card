import Watch from "./Watch.js";

export default class Orient extends Watch {
  constructor(model, price, movementType) {
    super('Orient', model, price);
    this.movementType = movementType;
  }

  showStatus() {
    console.log(`Статус: Надежные японские часы`);
    console.log(`Механизм: ${this.movementType}`);
  }

  windMechanism() {
    console.log(`${this.model}: Заводим механический механизм вручную`);
  }
}
