import Watch from "./Watch.js";
import Rolex  from "./Rolex.js";
import Orient from "./Orient.js";
import Casio from "./Casio.js";
import Modal from "./Modal.js";
import Form from "./Form.js";

// 3 Создать структуру на ваш выбор

document.addEventListener('DOMContentLoaded', function() {

  const rolex = new Rolex('Submariner', 12000, 'Нержавеющая сталь', 300);
  rolex.showInfo();
  rolex.showStatus();
  rolex.start();
  console.log('');


  const orient = new Orient('Bambino', 250, 'Автоматический');
  orient.showInfo();
  orient.showStatus();
  orient.windMechanism();
  orient.start();
  console.log('');


  const casio = new Casio('F-91W', 25,);
  casio.showInfo();
  casio.showStatus();
  console.log('');

// 4. Создать файл Modal.js и в нем создать  класс для модального окна

  const registrationModal = new Modal('registrationModal');
  const openModalBtn = document.getElementById('open-modal');

  openModalBtn.addEventListener('click', () => {
    registrationModal.open();
  });

  console.log('Модальное окно создано!');
  console.log('Открыто сейчас?', registrationModal.isOpen());

//5. Создать файл Form.js и реализовать класс для формы под названием Form
  
  const registrationForm = new Form('registrationForm');
  registrationForm.form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!registrationForm.isValid()) {
      alert('Пожалуйста, заполните все поля правильно.');
      return;
    }

  const values = registrationForm.getValues();
    if (values.password && values.confirmPassword && values.password !==values.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    const formData = registrationForm.getValues();
    const userData = {
      ...formData,
      createdOn: new Date()
    };

    console.log('Регистрация успешна!');
    console.log('Данные пользователя:', userData);


    registrationModal.close();
    registrationForm.reset();
  });
});
