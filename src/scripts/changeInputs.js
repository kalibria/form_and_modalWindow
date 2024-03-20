import {submitForm} from './submitForm';
import {fieldsValidation} from './fieldsValidation';


export const inputName = document.getElementById('name');
export const inputEmail = document.getElementById('email');
export const inputTel = document.getElementById('tel');
export const inputMessage = document.getElementById('message');
export const buttonSubmit = document.getElementById('btnSubmit');


inputName.onchange = () => {
  fieldsValidation.fieldNameValidation(inputName)
};

inputEmail.oninput = () => {
  fieldsValidation.fieldEmailValidation(inputEmail)
}

inputTel.onchange = () =>{
  fieldsValidation.fieldTelValidation(inputTel)
}


inputMessage.onchange = () =>{
  fieldsValidation.fieldMessageValidation(inputMessage)
}

buttonSubmit.onclick = () => submitForm()


