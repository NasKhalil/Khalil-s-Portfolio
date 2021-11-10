var emailValidationRegex = /^[a-z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var email = document.getElementById('mail');
var submitForm = document.querySelector('#contact-form');
var errorMessage = document.querySelector('.error-message');

function checkEmail(emailInput) {
  if (emailInput.trim() === '') {
    // alert('please enter your email');
    return false;
  }
  if (!emailValidationRegex.test(emailInput)) {
    // alert('please use only lowercase');
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
