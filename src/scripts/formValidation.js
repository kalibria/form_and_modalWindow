import {nameValidation} from './nameValidation';
import {emailValidation} from './emailValidation';
import {submitValidation} from './submitValidation';
import {createErrorMessage} from './createErrorMessage';
import {deleteErrorMessage} from './deleteErrorMessage';
import {mask} from './telMask';


const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMessage = document.getElementById('message');
const buttonSubmit = document.getElementById('btnSubmit');

export let valuesForm = {
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
    if(!document.getElementById('errorName')){
      const errorName = createErrorMessage('Invalid name', 'errorName');
      inputName.after(errorName);
      inputName.className = 'errorInput';
    }
  }
};

inputEmail.onchange = () => {
  if(emailValidation(inputEmail.value)){
    valuesForm.email = inputEmail.value;
    deleteErrorMessage('errorEmail', inputEmail)
  }else {
    if(!document.getElementById('errorEmail')){
      const errorEmail = createErrorMessage('Invalid email', 'errorEmail');
      inputEmail.after(errorEmail);
      inputEmail.className = 'errorInput';
    }
  }
}

inputTel.onchange = () =>{
  if(!mask.masked.isComplete){
    if(!document.getElementById('errorTel')){
      const errorTel = createErrorMessage('Invalid telephone number','errorTel');
      inputTel.after(errorTel);
      inputTel.className = 'errorInput';
    }
  }else {
    valuesForm.tel = mask.value;
    deleteErrorMessage('errorTel', inputTel)
  }
}

inputMessage.onchange = () =>{
  if(inputMessage.value !== ""){
    valuesForm.message = inputMessage.value
  }else {
    if(document.getElementById('errorMessage')){
      const errorMessage = createErrorMessage('Invalid message', 'errorMessage');
      inputMessage.after(errorMessage);
      inputMessage.className = 'errorInput';
    }
  }
}

buttonSubmit.onclick = () => submitValidation(valuesForm)


