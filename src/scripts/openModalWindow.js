import {addOpenStyle, removeOpenStyle} from './openRemoveOpenStyle'

const openButton = document.getElementById('openButton');
const modalWindow = document.getElementById('modelWindow');


openButton.onclick = (event) => {
  event.preventDefault();
  addOpenStyle(modalWindow);
}


