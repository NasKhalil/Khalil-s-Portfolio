const emailValidationRegex = /^[a-z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const email = document.getElementById('mail');
const submitForm = document.querySelector('#contact-form');
const errorMessage = document.querySelector('.error-message');

function checkEmail(emailInput) {
  if (emailInput.trim() === '') {
    return false;
  }
  if (!emailValidationRegex.test(emailInput)) {
    return false;
  }
  return true;
}

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailValue = email.value;
  if (checkEmail(emailValue)) {
    errorMessage.style.display = 'none';
    submitForm.submit();
  } else {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a valid email';
  }
});
