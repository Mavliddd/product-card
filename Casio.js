import Watch from './Watch.js';

export default class Casio extends Watch {
  constructor(model, price, isShockResistant) {
    super('Casio', model, price);
    this.isShockResistant = isShockResistant;
  }

  showStatus() {
    console.log('Статус: Практичные японские часы');
    console.log(`Ударопрочные: ${this.isShockResistant ? 'да' : 'нет'}`);
  }
}
