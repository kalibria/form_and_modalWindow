const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMessage = document.getElementById('message');



const nameValidation = (name) =>{
  const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
  if(!regName.test(name)){
    console.log("name", name)
    alert('Invalid name given.')
  }else {
    alert('Valid name given.');
  }
}

inputName.onchange = () => nameValidation(inputName.value);

const emailValidation = (email) =>{
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regEmail.test(email)){
    alert("Invalid email. Please enter a valid email address.");
  }else {
    alert("Email is valid.");
  }
}

inputEmail.onchange = () => emailValidation(inputEmail.value)






const buttonSubmit = document.getElementById('btnSubmit');







buttonSubmit.onsubmit = function (){

}
