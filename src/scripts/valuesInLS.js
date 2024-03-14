class ValuesInLS {
  setValue = (id, value) =>{
    localStorage.setItem(id, value)
  }
  getValue = (id) => {
    return localStorage.getItem(id)
  }
}


export const FormValues = new ValuesInLS();

