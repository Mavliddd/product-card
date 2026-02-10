import Watch from "./Watch.js";

export default class Rolex extends Watch {
    constructor(model, price, material) {
        super('Rolex', model, price);
        this.material = material
    }
    
    showStatus() {
        console.log(`Статус: Люксовые швейцарские часы`);
        console.log(` Материал: ${this.material}`);
    }
    start() {
        console.log(' Звук завода: тик-тик-тик (премиум звук)');
        super.start();
    }
}