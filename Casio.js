import Watch from './Watch.js';

export default class Casio extends Watch {
  constructor(model, price, isShockResistant) {
    const detailsMessage = `Ударопрочные: ${isShockResistant ? 'да' : 'нет'}`;
    super('Casio', model, price, ' Практичные японские часы', detailsMessage);
    this.isShockResistant = isShockResistant;
  }
}
