
// Функция принимающая два параметра : город и температура воздуха.

function showWeatherInfo (city, temperature) {
    console.log(`"Сейчас в ${city} температура - ${temperature} градусов по Цельсию"`)
}
showWeatherInfo('Махачкале','25')




//  Функция для сравнения выбранного числа со скоростью звука

const SPEED_SOUND = 343;

function checkSpeed(speed) {
  if(speed > SPEED_SOUND) {
    console.log('Сверхзвуковая скорость');
  } else if(speed === SPEED_SOUND){
    console.log('Скорость звука');
  } else {
    console.log('Дозвуковая скорость');
  }
}

checkSpeed(500);




//  Функция для подсчета стоимости товара.

const product = 'Телефон';

const productPrice = 1500;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - budget;
    console.log(`Вам не хватает ${shortage}$, пополните баланс`);
  }
}

buyProduct(1100);



//  Создать 1 функцию и именовать её по своему усмотрению

const money = 1000;

function buildHouse(limit) {
  if (money > limit) {
    console.log('Ураа, построим дом!');
  }else if (money === limit) {
    console.log('Надо поднакопить!');
  }else {
    console.log('Не видать нам дома!');
  }

}

buildHouse(900);
buildHouse(1000);
buildHouse(1100);



//  Создать переменные и именовать их по своему усмотрению

const species = 'Горилла'
const nickname = "Терминатор"
const country = "Конго"

let mayAttack = false
let lovesBananas = true