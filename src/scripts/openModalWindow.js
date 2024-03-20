const openButton = document.getElementById('openButton');



openButton.onclick = (event) => {
  const modalWindow = document.getElementById('modelWindow');
  event.preventDefault();
  modalWindow.classList.add("open");

  const closeButton = document.getElementById('closeButton');
  modalWindow.onclick = (event) => {
    console.log(event.target.id)
    if(event.target.id !== "modalWindowBody" || event.target.id === "closeButton"){
      modalWindow.classList.remove('open');
    }
  }


}


