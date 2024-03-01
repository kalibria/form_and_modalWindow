export const nameValidation = (name) =>{
  const regName = /^[a-zA-Zа-яА-Я-']{2,}$/;
  return regName.test(name);
}
