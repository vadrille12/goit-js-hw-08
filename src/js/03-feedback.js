import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';

const input = document.querySelector(`[name="email"]`);
const textarea = document.querySelector(`[name="message"]`);
const form = document.querySelector(`.feedback-form`);
const storageKey = `feedback-form-state`;
// const submitBtn = document.querySelector('[type="submit"]');

addToInputs();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const userData = {
  [input.name]: input.value,
  [textarea.name]: textarea.value,
};
localStorage.setItem(storageKey, JSON.stringify(userData));

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

function onFormInput(e) {
  userData[input.name] = input.value;
  userData[textarea.name] = textarea.value;
  localStorage.setItem(storageKey, JSON.stringify(userData));
}

function addToInputs() {
  const savedData = localStorage.getItem(storageKey);
  const currentUserData = JSON.parse(savedData);
  if (!currentUserData) {
    return;
  }
  input.value = currentUserData.email;
  textarea.value = currentUserData.message;
}
