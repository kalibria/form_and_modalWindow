export const createErrorMessage = (message, nameId) => {
  let errorEl = document.createElement('div');
  errorEl.className = "errorMessage";
  errorEl.setAttribute('id', nameId)
  errorEl.innerHTML = message;
  return errorEl;
}
