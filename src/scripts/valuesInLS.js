class ValuesInLS {
  setValue = (id, value) =>{
    localStorage.setItem(id, value)
  }
  getValue = (id) => {
    return localStorage.getItem(id)
  }
  clear = () => {
    localStorage.clear()
  }
}


export const formValues = new ValuesInLS();

