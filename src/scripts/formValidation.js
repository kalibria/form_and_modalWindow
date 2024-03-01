import {nameValidation} from './nameValidation';
import {emailValidation} from './emailValidation';
import {submitValidation} from './submitValidation';
import {createErrorMessage} from './createErrorMessage';
import {deleteErrorMessage} from './deleteErrorMessage';


const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMessage = document.getElementById('message');
const buttonSubmit = document.getElementById('btnSubmit');

let valuesForm = {
  name:'',
  email:'',
  tel:'',
  message:''
};

inputName.onchange = () => {
  if(nameValidation(inputName.value)){
    valuesForm.name = inputName.value;
    deleteErrorMessage('errorName', inputName)
  }else {
    const errorName = createErrorMessage('Invalid name', 'errorName');
    inputName.after(errorName);
    inputName.className = 'errorInput';
  }
};

inputEmail.onchange = () => {
  if(emailValidation(inputEmail.value)){
    valuesForm.email = inputEmail.value;
    deleteErrorMessage('errorEmail', inputEmail)
  }else {
    const errorEmail = createErrorMessage('Invalid email', 'errorEmail');
    inputEmail.after(errorEmail);
    inputEmail.className = 'errorInput';
  }
}

inputTel.onchange = () =>{
  if(inputTel.value !== ""){
    valuesForm.tel = inputTel.value
  }
}

inputMessage.onchange = () =>{
  if(inputMessage.value !== ""){
    valuesForm.message = inputMessage.value
  }else {
    const errorMessage = createErrorMessage('Invalid message', 'errorMessage');
    inputMessage.after(errorMessage);
    inputMessage.className = 'errorInput';
  }
}

buttonSubmit.onclick = () => submitValidation(valuesForm)


