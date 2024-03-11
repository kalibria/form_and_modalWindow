import {disableScrolling, enableScrolling} from './disableEnableScrolling';

export const addOpenStyle = (element) => {
  element.style.display = 'block';
  disableScrolling();
}

export const removeOpenStyle = (element) => {
  element.style.display = 'none';
  enableScrolling();
}
