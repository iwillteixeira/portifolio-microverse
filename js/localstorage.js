window.onload = () => {
  const form = document.getElementById('form');
  const valuesForm = () => {
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  form.name.addEventListener('change', valuesForm);
  form.email.addEventListener('change', valuesForm);
  form.message.addEventListener('change', valuesForm);

  const existLocal = () => {
    let name = '';
    let email = '';
    let message = '';

    if (JSON.parse(localStorage.getItem('formData')) === null) {
      name = '';
      email = '';
      message = '';
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem('formData')));
    }

    if (name !== 'empty' || email !== 'empty' || message !== 'empty') {
      form.name.value = name;
      form.email.value = email;
      form.message.value = message;
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    existLocal();
  });
};
