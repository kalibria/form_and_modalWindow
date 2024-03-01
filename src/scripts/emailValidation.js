export const emailValidation = (email) =>{
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEmail.test(email)
}
