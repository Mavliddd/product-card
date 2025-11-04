// Покраска всех карточек

const cardListItem = document.querySelectorAll(".card-list__item");
const changeColorAllCardButton = document.querySelector(
  "#change-color-all-card"
);
const greenColorHash = "#00FF00";
const yellowColorHash = "#FFFF00";

changeColorAllCardButton.addEventListener("click", () => {
  cardListItem.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// покраска первой карточки

const firstProductCard = document.querySelector(".card-list__item");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-card"
);

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

const OutputTitle = document.querySelector("#output-title");

OutputTitle.addEventListener("mouseover", () =>
  console.log(OutputTitle.textContent)
);

// переключение цветов кнопки

const changeColorButton = document.getElementById("color-switching");

changeColorButton.addEventListener("click", function () {
  if (changeColorButton.classList.contains("red-background")) {
    changeColorButton.classList.remove("red-background");
    changeColorButton.classList.add("orange-background");
  } else if (changeColorButton.classList.contains("orange-background")) {
    changeColorButton.classList.remove("orange-background");
    changeColorButton.classList.add("red-background");
  } else {
    changeColorButton.classList.add("red-background");
  }
});
