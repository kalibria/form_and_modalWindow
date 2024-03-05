

export const submitValidation =async (formValues) =>{
  if(formValues.name !== "" && formValues.email !== "" && formValues.tel !== "" && formValues.message !== ""){
    let response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST'
    });
    if( response.ok){
     let json = await response.json()
   }else {
     alert('Error HTTP' + response.status)
   }
  }else {
    alert("Please fill a form");
  }
}
