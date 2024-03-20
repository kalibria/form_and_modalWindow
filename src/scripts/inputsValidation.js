import {mask} from './telMask';

class InputsValidation {
  nameValidation = (name) =>{
    const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
    return regName.test(name);
  }
  emailValidation = (email) =>{
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log('regexp', regEmail.test(email))
    return regEmail.test(email)
  }
  telValidation = () => {
    return mask.masked.isComplete
  }
  messageValidation = (message) =>{
    return message!=="";
  }
}

export const formInputsValidation = new InputsValidation();
