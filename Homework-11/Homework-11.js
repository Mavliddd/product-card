import Coffee from './Coffee.js';
import Tea from './Tea.js';
import Smoothie from './Smoothie.js';
import Cafe from './Cafe.js';

const mountainCafe = new Cafe("Горное Кафе", "г.Кизляр, бульвар Романтиков 69");
mountainCafe.getInfo();
console.log();

const coffee = new Coffee('Кофе Эспрессо', 'средний', 45, 80, 'Робуста', 'без добавок');
console.log(coffee);

const tea = new Tea('Чай', 'большой', 30, 75, 'черный', 'лимон');
console.log(tea);

tea.setTemperature(90);
console.log(`Температура чая изменена на: ${tea.getTemperature()} °С`);
console.log();

const smoothie = new Smoothie('Смузи Тропический', 'средний', 22, 6, 'клубника+банан');
console.log(smoothie);

const newOrder = new Cafe('Горное Кафе', 'г.Кизляр, бульвар Романтиков 69');
newOrder.orderDrink(smoothie);
newOrder.orderDrink(coffee);
newOrder.orderDrink(tea);