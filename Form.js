export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.form);
    const values = Object.fromEntries(formData.entries());

    console.log('Значения формы', values);
    return values;
  }

  isValid() {
    const isValid = this.form.checkValidity();

    console.log('Форма валидна?', isValid);
    return isValid;
  }

  reset() {
    this.form.reset();
  }

  validate() {
    return true;
  }
}