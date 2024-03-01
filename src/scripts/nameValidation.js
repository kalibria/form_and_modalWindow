export const nameValidation = (name) =>{
  const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
  if(!regName.test(name)){
    return false
  }else {
    alert('Valid name given.');
    return true
  }
}
