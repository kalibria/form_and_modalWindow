export const nameValidation = (name) =>{
  const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
  if(!regName.test(name)){
    alert('Invalid name given.');
    return false
  }else {
    alert('Valid name given.');
    return true
  }
}
