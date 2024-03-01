export const emailValidation = (email) =>{
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regEmail.test(email)){
    return false
  }else {
    alert("Email is valid.");
    return true
  }
}
