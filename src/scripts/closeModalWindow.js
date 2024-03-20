import {removeOpenStyle} from './openRemoveOpenStyle';


const closeButton = document.getElementById('closeButton');
closeButton.onclick = () =>{
  removeOpenStyle(modalWindow)
}

export const modalWindow = document.getElementById('modalWindow');
modalWindow.onclick = (event) =>{
  console.log("closeTarget", event.target)
}
