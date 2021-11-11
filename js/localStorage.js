const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#mail');
const inputText = document.querySelector('#msg');

const inputData = {
  name: '',
  email: '',
  text: '',
};

function saveData() {
    inputData.name = inputName.value;
    inputData.email = inputEmail.value;
    inputData.text = inputText.value;
    inputDataStr = JSON.stringify(inputData);
    localStorage.inputData = inputDataStr;
  }
  
  inputName.addEventListener('input', saveData);
  inputEmail.addEventListener('input', saveData);
  inputText.addEventListener('input', saveData);