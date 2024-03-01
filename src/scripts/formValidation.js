import {nameValidation} from './nameValidation';
import {emailValidation} from './emailValidation';
import {submitValidation} from './submitValidation';


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
}

inputName.onchange = () => {
  if(nameValidation(inputName.value)){
    valuesForm.name = inputName.value
  }
};

inputEmail.onchange = () => {
  if(emailValidation(inputEmail.value)){
    valuesForm.email = inputEmail.value
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
  }
}

buttonSubmit.onclick = () => submitValidation(valuesForm)


