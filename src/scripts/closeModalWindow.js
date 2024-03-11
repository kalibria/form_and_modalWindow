import {removeOpenStyle} from './openRemoveOpenStyle';
import {modalWindow} from './openModalWindow';


const closeButton = document.getElementById('closeButton');
closeButton.onclick = () =>{
  removeOpenStyle(modalWindow)
}
