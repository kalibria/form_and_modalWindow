const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMessage = document.getElementById('message');

const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
inputName.onchange = () => {
  if(!regName.test(inputName.value)){
    console.log("name", inputName.value)
    alert('Invalid name given.')
  }else {
    alert('Valid name given.');
  }
}



const buttonSubmit = document.getElementById('btnSubmit');







buttonSubmit.onsubmit = function (){

}
