import {formValues} from './valuesInLS';
import {submitValidation} from './submitValidation';

class FilledValues {
  createObjWithAllValuesForSubmit = () => {
    return {
      name: formValues.getValue('name'),
      email: formValues.getValue('email'),
      tel: formValues.getValue('tel'),
      message: formValues.getValue('message')
    }
}
  createObjWithInfoIsFieldsIsFill = () => {
    const allValues = this.createObjWithAllValuesForSubmit();
    return {
      name: submitValidation("name", allValues.name),
      email:  submitValidation("email", allValues.email),
      tel: submitValidation("tel", allValues.tel),
      message: submitValidation("message", allValues.message)
    }
  }
}

export const filledValues = new FilledValues();
