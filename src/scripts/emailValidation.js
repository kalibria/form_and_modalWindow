export const emailValidation = (email) =>{
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regEmail.test(email)){
    alert("Invalid email. Please enter a valid email address.");
    return false
  }else {
    alert("Email is valid.");
    return true
  }
}
