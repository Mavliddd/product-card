import Watch from "./Watch.js";

export default class Orient extends Watch {
  constructor(model, price, movementType) {
    super('Orient', model, price, 'Надежные японские часы', `Механизм: ${movementType}`);
    this.movementType = movementType;
  }

  windMechanism() {
    console.log(`${this.model}: Заводим механический механизм вручную`);
  }
}
