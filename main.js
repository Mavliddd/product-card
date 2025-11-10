// Покраска всех карточек

const productCards = document.querySelectorAll(".card-list__item");
const changeColorAllCardButton = document.querySelector("#change-color-all-card");
const greenColorHash = "#00FF00";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// покраска первой карточки

const yellowColorHash = "#FFFF00";

const firstProductCard = document.querySelector(".card-list__item");
const changeColorFirstCardButton = document.querySelector("#change-color-first-card");

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = yellowColorHash;
});

// открыть Google

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");
  if (answer === true) {
    window.open("https://google.com");
  } else {
    return;
  }
}

// вывод лога и сообщения

const showAlertAndLogButton = document.querySelector("#output-console-log");

showAlertAndLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №4"));

function outputConsoleLog(message) {
  alert("message");
  console.log(message);
}

//вывод в консоль заголовка

const OutputTitle = document.querySelector(".main-title");

OutputTitle.addEventListener("mouseover", () => console.log(OutputTitle.textContent));

// переключение цветов кнопки

const toggleColorButton = document.getElementById("color-switching");

toggleColorButton.addEventListener("click", function () {
this.classList.toggle('bg-red');
this.classList.toggle('bg-orange');
});
