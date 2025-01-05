import '../css/index.css';

const signUpEl = document.querySelector('.sign-up');
const successEl = document.querySelector('.success-message');
const formEl = document.querySelector('#form');
const emailEl = document.querySelector('#email');
const emailErrorEl = document.querySelector('#email-error');
const btnDismissEl = document.querySelector('#btn-dismiss');

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const showElement = (element) => {
  element.classList.remove('hidden');
  element.classList.add('fade-in');
};

const hideElement = (element) => {
  element.classList.add('hidden');
  element.classList.remove('fade-in');
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  emailErrorEl.textContent = '';
  emailEl.classList.remove('error-input');
  const email = emailEl.value;

  if (!isValidEmail(email)) {
    emailErrorEl.textContent = 'Valid email required';
    emailEl.classList.add('error-input');
  } else {
    showElement(successEl);
    hideElement(signUpEl);
  }
});

btnDismissEl.addEventListener('click', () => {
  hideElement(successEl);
  showElement(signUpEl);
});
