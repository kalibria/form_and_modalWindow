import {formValues} from './valuesInLS';
import {setDefaultInputValues} from './setDefaultInputValues';
import {createErrorMessage} from './createErrorMessage';
import { filledValues} from './filledValues';


export const submitForm = async () => {

  const valuesForSubmit = filledValues.createObjWithAllValuesForSubmit();
  const fieldsIsFill = filledValues.createObjWithInfoIsFieldsIsFill();

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

      alert("Fill the form");
      const map = new Map(Object.entries(fieldsIsFill));
      map.forEach((value, key) => {
        if (value === false) {
          console.log("value", value)
          const blankField = document.getElementById(key);
          const errorEl = createErrorMessage('Fill in the field', `error${key}`);
          blankField.after(errorEl);
          blankField.className = 'errorInput';
        }
      });
      const unfilledInputs = Object.fromEntries(map.entries())

    }
}


// export const submitForm = () => {
//   alert("submit")
// }
