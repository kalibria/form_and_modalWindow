import {fieldsValidation} from './fieldsValidation';
import {inputMessage} from './changeInputs';

export const submitValidation = (id, value) =>  {
  if(id === 'message'){
    if(typeof value == null){
      return false
    }else {
      fieldsValidation.fieldMessageValidation(inputMessage)
    }
  }
    return typeof value ==='string';
}



