import {FormValues} from './valuesInLS';
import {deleteErrorMessage} from './deleteErrorMessage';
import {createErrorMessage} from './createErrorMessage';
import {formInputsValidation} from './inputsValidation';
import {mask} from './telMask';

class FieldsValidation {
  fieldNameValidation = (inputName) => {
    if(formInputsValidation.nameValidation(inputName.value)){
      FormValues.setValue('name', inputName.value)
      deleteErrorMessage('errorName', inputName)
    }else {
      if(!document.getElementById('errorName')){
        const errorName = createErrorMessage('Invalid name', 'errorName');
        inputName.after(errorName);
        inputName.className = 'errorInput';
      }
    }
  }

  fieldEmailValidation = (inputEmail) => {
    if(formInputsValidation.emailValidation(inputEmail.value)){
      FormValues.setValue('email', inputEmail.value)
      deleteErrorMessage('errorEmail', inputEmail)
    }else {
      if(!document.getElementById('errorEmail')){
        const errorEmail = createErrorMessage('Invalid email', 'errorEmail');
        inputEmail.after(errorEmail);
        inputEmail.className = 'errorInput';
      }
    }
  }

  fieldTelValidation = (inputTel) => {
    if(!formInputsValidation.telValidation()){
      if(!document.getElementById('errorTel')){
        const errorTel = createErrorMessage('Invalid telephone number','errorTel');
        inputTel.after(errorTel);
        inputTel.className = 'errorInput';
      }
    }else {
      FormValues.setValue('tel',mask.value )
      deleteErrorMessage('errorTel', inputTel)
    }
  }

  fieldMessageValidation = (inputMessage) => {
    if(!formInputsValidation.messageValidation(inputMessage.value)){
      FormValues.setValue('message', inputMessage.value)
    }else {
      if(document.getElementById('errorMessage')){
        const errorMessage = createErrorMessage('Invalid message', 'errorMessage');
        inputMessage.after(errorMessage);
        inputMessage.className = 'errorInput';
      }
    }
  }


}

export const fieldsValidation = new FieldsValidation()
