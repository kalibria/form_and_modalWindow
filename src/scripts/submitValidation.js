export const submitValidation =(formValues) =>{
  console.log("submit", formValues)
  if(formValues.name !== "" && formValues.email !== "" && formValues.tel !== "" && formValues.message !== ""){
    alert("Form accepted");
    window.location.reload();
  }else {
    alert("Form not accepted");
  }
}
