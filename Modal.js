export default class Modal {
  constructor(modalId) {
    this.overlay = document.getElementById(modalId)
    this.closeBtn = this.overlay.querySelector('.close');
    this.initCloseBtnListener();
  }

  open() {
    this.overlay.classList.add('modal-showed');
    console.log('Модальное окно открыто');
  }

  close() {
    this.overlay.classList.remove('modal-showed');
    console.log('Модальное окно закрыто');
  }

  isOpen() {
    return this.overlay.classList.contains('modal-showed');
  }

  initCloseBtnListener() {
    this.closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
}