var emailValidationRegex = /^[a-z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var email = document.getElementById('mail');
var submitForm = document.querySelector('#contact-form');

function checkEmail() {
    if (email.value.trim() === ""){
        alert('please enter your email')
      return false
    }
    if (!emailValidationRegex.test(email.value)){
        alert('please use only lowercase')
        return false
    }
}

submitForm.addEventListener('submit', function(e) {
    if(checkEmail() === false){
        e.preventDefault();
    }
});