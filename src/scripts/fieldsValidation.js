import {formValues} from './valuesInLS';
import {deleteErrorMessage} from './deleteErrorMessage';
import {createErrorMessage} from './createErrorMessage';
import {formInputsValidation} from './inputsValidation';
import {mask} from './telMask';
import {inputTel} from './changeInputs';

class FieldsValidation {
  fieldNameValidation = (name) => {
    if (formInputsValidation.nameValidation(name.value)) {
      formValues.setValue('name', name.value)
      deleteErrorMessage('errorName', name);

      if(document.getElementById('errorname')){
        deleteErrorMessage('errorname', name)
      }
      return true
    } else {
      if (!document.getElementById('errorName')) {
        const errorName = createErrorMessage('Invalid name', 'errorName');
        name.after(errorName);
        name.className = 'errorInput';
        return false
      }
    }
  }

  fieldEmailValidation = (email) => {
    if (formInputsValidation.emailValidation(email.value)) {
      formValues.setValue('email', email.value)
      deleteErrorMessage('errorEmail', email)

      if(document.getElementById('erroremail')){
        deleteErrorMessage('erroremail', email)
      }
      return true
    } else {
      if (!document.getElementById('errorEmail')) {
        const errorEmail = createErrorMessage('Invalid email', 'errorEmail');
        email.after(errorEmail);
        email.className = 'errorInput';
        return false
      }
    }
  }


  fieldTelValidation = (tel) => {

    if (!formInputsValidation.telValidation()) {
      if (!document.getElementById('errorTel')) {
        const errorTel = createErrorMessage('Invalid telephone number', 'errorTel');
        inputTel.after(errorTel);
        inputTel.className = 'errorInput';
        return false
      }
    } else {
      formValues.setValue('tel', mask.value)
      deleteErrorMessage('errorTel', inputTel)

      if(document.getElementById('errortel')){
        deleteErrorMessage('errortel', tel)
      }
      return true
    }
  }

  fieldMessageValidation = (message) => {

    if (formInputsValidation.messageValidation(message.value)) {
      formValues.setValue('message', message.value)
      deleteErrorMessage('errorMessage', message)

      if(document.getElementById('errormessage')){
        deleteErrorMessage('errormessage', message)
      }
      return true
    } else {
      if (!document.getElementById('errorMessage')) {
        const errorMessage = createErrorMessage('Invalid message', 'errorMessage');
        message.after(errorMessage);
        message.className = 'errorInput';
        return false
      }
    }
  }
}


export const fieldsValidation = new FieldsValidation()
