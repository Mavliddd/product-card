import {products} from './script.js'

// 3 Cоздать и реализовать шаблон для продуктовых карточек

const productListTemplate = document.getElementById('product-template')
const productItem = document.getElementById('productItem')


function outputProductCards(productToShow) {

productToShow.forEach(product => {
    const productClone = productListTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `/image/${product.image}.svg`
    productClone.querySelector('.description').textContent = product.description
    productClone.querySelector('.name').textContent = product.name
    productClone.querySelector('.product-properties').textContent = product.properties
    productClone.querySelector('.product-composition').innerHTML = product.composition.map(item => `<li>${item}</li>`).join("")
    productClone.querySelector('.cost-product').innerHTML = product.price + '&#8381'
    productItem.appendChild(productClone)
})
}


// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const namesList = products.reduce((acc, product, index) => {
    if (index === 0) {
        return product.name 
    }
        return acc + '; ' + product.name
}, '')

console.log(namesList)


// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productDescriptions = products.reduce ((acc, product) => {
    acc[product.name] = product.properties
    return acc
}, {})

console.log(productDescriptions)


// 6  Реализовать функцию

const showCards = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5")
  const selectedCount = Number(userInput);
  if (selectedCount > 0 && selectedCount <= products.length) {
    outputProductCards(products.slice(0,selectedCount ))
  } else {
    alert("Введите число от 1 до 5")
  }
}

showCards()