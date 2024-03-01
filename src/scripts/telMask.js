import IMask from 'imask';


const telInput = document.getElementById('tel');
const maskOptions = {
  mask: '+{375}(00)000-00-00'
};
const mask = IMask(telInput, maskOptions);

mask.on('complete', () => console.log(mask.value));


