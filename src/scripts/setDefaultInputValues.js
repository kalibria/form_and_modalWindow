import {inputEmail, inputMessage, inputName, inputTel} from './changeInputs';
import {mask} from './telMask';

export const setDefaultInputValues = () => {
  inputName.value = '';
  inputEmail.value = '';
  mask.value = '         ';
  inputMessage.value = '';
}
