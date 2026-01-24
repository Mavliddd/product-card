// 4 добавлена логика к форме

const subscriptionForm = document.querySelector('.input-button')

subscriptionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
const email = subscriptionForm.querySelector('.subscribe-input').value

console.log({ email: email})
}) 

// 5 добавление модального окна

let user = null;

const overlay = document.querySelector('.overlay')
const openBtn = document.getElementById('open-modal')
const closeBtn = document.querySelector('.close')
const form = document.getElementById('form'); 

openBtn.addEventListener('click', () => {
  overlay.classList.add('modal-showed')
})

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('modal-showed')
})

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.classList.remove('modal-showed')
  }
})

// 6 работа формы регистрации

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert('Пожалуйста, заполните все поля правильно.');
    return;
  }

const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

  if (data.password !== data.confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }


user = {
  ...data,
  createdOn: new Date()
};

console.log('✅ Регистрация успешна! Данные пользователя:', user);

overlay.classList.remove('modal-showed');

});