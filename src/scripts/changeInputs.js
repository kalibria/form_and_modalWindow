import {submitValidation} from './submitValidation';
import {fieldsValidation} from './fieldsValidation';


const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMessage = document.getElementById('message');
const buttonSubmit = document.getElementById('btnSubmit');


inputName.onchange = () => {
  fieldsValidation.fieldNameValidation(inputName)
};

inputEmail.onchange = () => {
  fieldsValidation.fieldEmailValidation(inputEmail)
}

inputTel.onchange = () =>{
  fieldsValidation.fieldTelValidation(inputTel)
}


inputMessage.onchange = () =>{
  fieldsValidation.fieldMessageValidation(inputMessage)
}

buttonSubmit.onclick = () => submitValidation(valuesForm)


