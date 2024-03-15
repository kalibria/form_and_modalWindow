import {formValues} from './valuesInLS';
import {fieldsValidation} from './fieldsValidation';
import {setDefaultInputValues} from './setDefaultInputValues';
import {submitValidation} from './submitValidation';


export const submitForm = async () => {

  const valuesForSubmit = {
    name: formValues.getValue('name'),
    email: formValues.getValue('email'),
    tel: formValues.getValue('tel'),
    message: formValues.getValue('message')
  }

  const fieldsIsFill = {
    name: submitValidation(valuesForSubmit.name),
    email:  submitValidation(valuesForSubmit.email),
    tel: submitValidation(valuesForSubmit.tel),
    message: submitValidation(valuesForSubmit.message)
  }

  const isTrue = Object.values(fieldsIsFill).every(value => value === true)

    if(isTrue){
      let response = await fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: JSON.stringify(valuesForSubmit)
      });
      if( response.ok){
        let json = await response.json();
        alert(json.message);

        formValues.clear();
        setDefaultInputValues();
      }else {
        alert('Error HTTP' + response.status)
      }
    }else {
      alert("Fill the form")
    }

}
