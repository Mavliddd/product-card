

import { userComments } from "./comments.js";


/* Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtered = numbers.filter( (number) => {
  return number >= 5;
});

console.log(filtered)



/* Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.*/

const fruts = ['ананас', 'киви', 'манго', 'памелло', 'грейпфрут']

const hasBanan = fruts.includes('банан')

const hasMango = fruts.includes('манго')

console.log(hasBanan)

console.log(hasMango)



/* Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть. */ 

function reversyNumbers(number) {
    number.reverse()
}

reversyNumbers(numbers)

console.log(numbers)



function reversyFruts(fruts) {
    fruts.reverse()
}

reversyFruts(fruts)

console.log(fruts)


/* Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com" */

const filterComments = userComments.filter(user => user.email.includes('.com'))

console.log(filterComments);



/* Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1*/

const commentsWithPostId = userComments.map(user => ({
  ...user,
  postId: user.id <= 5 ? 2 : 1
}));

console.log(commentsWithPostId);



/* Перебрать массив, что бы объекты состояли только из айди и имени */

const userNamesWithIds = userComments.map(user => {
  return {
    id: user.id,
    name: user.name
  };
});

console.log(userNamesWithIds)



/* Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

const validatedComments = userComments.map(comment=> ({
    ...comment,
    isInvalid: comment.body.length > 180
}))

console.log(validatedComments)



//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const commentAuthorEmails =  userComments.reduce((acc, user) => {
  return [...acc, user.email]
}, [])

console.log(commentAuthorEmails)

const emails =  userComments.map(user => user.email);

console.log(emails)



// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

console.log (emails.toString())