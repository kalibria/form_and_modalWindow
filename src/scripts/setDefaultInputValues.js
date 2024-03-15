import {inputEmail, inputMessage, inputName} from './changeInputs';
import {mask} from './telMask';

export const setDefaultInputValues = () => {
  inputName.value = '';
  inputEmail.value = '';
  mask.destroy();
  inputMessage.value = '';
}
