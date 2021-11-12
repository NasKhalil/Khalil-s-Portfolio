const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.mail');
const inputText = document.querySelector('.msg');

const inputData = {
  name: '',
  email: '',
  text: '',
};

function loadData() {
  if (!localStorage.inputData) {
    return;
  }
  const loadedData = localStorage.inputData;
  inputName.value = loadedData.name;
  inputEmail.value = loadedData.email;
  inputText.value = loadedData.text;
}

function saveData() {
  inputData.name = inputName.value;
  inputData.email = inputEmail.value;
  inputData.text = inputText.value;
  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}

window.addEventListener('load', loadData);

inputName.addEventListener('input', saveData);
inputEmail.addEventListener('input', saveData);
inputText.addEventListener('input', saveData);
