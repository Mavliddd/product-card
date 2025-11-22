
//3

const user = {
    name:'Mavlid',
    lastname: 'Nabiev',
    age: 33,
    email: 'mavlid@mail.ru',
    job: 'bank',
    position: 'manager',
    contry: 'Russia',
    city: 'Kizlyar'
}

console.log(user);


//4

const myCar = {
    make: 'Audi',
    model: 'A3',
    year: 2025,
    color: 'red',
    transmission: 'avtomat'
}


myCar.owner = user;

console.log(myCar.owner.name);


//5

function addMaxSpeed(car){
    if(!('maxSpeed' in car)){
    car.maxSpeed = 200
    }
}

addMaxSpeed(myCar);
console.log(myCar.maxSpeed);

//6

function showProperty (myCar, propertyName){
    console.log(myCar[propertyName])
}

showProperty(myCar,'model');


//7

const products = ['milk','sugar','tea','bread','cheese'];


//8

const books = [
  {
    title: 'Портрет Дориана Грея',
    author: 'Оскар Уайльд',
    year: 1890,
    genre: 'мистика',
    pages: 270
  },
  {
    title: 'Сто лет одиночества',
    author: 'Габриэль Гарсиа Маркес',
    year: 1967,
    genre: 'классика',
    pages: 480
  },
  {
    title: 'Робинзон Крузо',
    author: 'Даниэль Дефо',
    year: 1719,
    genre: 'приключения',
    pages: 264
  }
]

books.push(
  {
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    year: 1877,
    genre: 'Роман',
    pages: 864,
  }
)

console.log(books);


//9

const harryPotterBooks = [
  {
    title: 'Гарри Поттер и Философский камень',
    author: 'Дж. К. Роулинг',
    year: 1997,
    genre: 'Фэнтези',
    pages: 332,
  },
  {
    title: 'Гарри Поттер и Тайная комната',
    author: 'Дж. К. Роулинг',
    year: 1998,
    genre: 'Фэнтези',
    pages: 352,
  },
  {
    title: 'Гарри Поттер и Узник Азкабана',
    author: 'Дж. К. Роулинг',
    year: 2001,
    genre: 'Фэнтези',
    pages: 416,
  }
];

const allBooks = [...books,...harryPotterBooks]

console.log(allBooks);


//10

function  addIsRare(allBooks){
    return allBooks.map(book => {
        return {
            ...book,
            isRare:book.year > 2000
        }
    })
}

console.log(addIsRare(allBooks));