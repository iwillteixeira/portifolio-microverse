const form = document.getElementById('form');
const email = document.getElementById('email_form');
const error = document.querySelector('.error-email');
const regex = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

const validateForm = () => {
  form.addEventListener('submit', (e) => {
    if (regex.test(email.value)) {
      error.textContent = '';
      email.style.border = '1px solid #cfd8dc';
    } else {
      e.preventDefault();
      email.style.border = '3px solid red';
      error.innerHTML = 'The email should be lowercase.';
      error.style.border = '1px solid';
    }
  });
};
window.onload = validateForm;
