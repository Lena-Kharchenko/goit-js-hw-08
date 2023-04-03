import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInputData, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = feedbackForm.elements;
reloadPage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage(evt) {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Заповніть поля форми, будь ласка');
  }

  localStorage.removeItem(LOCAL_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}
