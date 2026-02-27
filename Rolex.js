import Watch from "./Watch.js";

export default class Rolex extends Watch {
    constructor(model, price, material) {
        super('Rolex', model, price, 'Люксовые швейцарские часы', `Материал: ${material}`);
        this.material = material;
    }

    start() {
        console.log(' Звук завода: тик-тик-тик (премиум звук)');
        super.start();
    }
}