import {disableScrolling, enableScrolling} from './disableEnableScrolling';

export const addOpenStyle = (element) => {
  console.log("open")
  // element.style.display = 'block';
  // element.className('open')
  disableScrolling();
}

export const removeOpenStyle = (element) => {
  element.style.display = 'none';
  enableScrolling();
}
