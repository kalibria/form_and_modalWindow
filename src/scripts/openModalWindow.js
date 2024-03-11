import {addOpenStyle, removeOpenStyle} from './openRemoveOpenStyle'

const openButton = document.getElementById('openButton');
export const modalWindow = document.getElementById('modelWindow');


openButton.onclick = (event) => {
  event.preventDefault();
  addOpenStyle(modalWindow);
}


