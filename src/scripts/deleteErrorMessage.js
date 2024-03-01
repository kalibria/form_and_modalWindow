export const deleteErrorMessage = (id, input) => {
  const elForDelete = document.getElementById(id);
  if(elForDelete){
    elForDelete.remove();
    input.classList.remove('errorInput')
  }
}
