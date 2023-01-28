var form = document.getElementById("form");
if(form){
    form.addEventListener('submit', handleSubmit);
}
var submitTimer;

function handleSubmit(event) {
console.log('submitTimer set');
  event.preventDefault();
  submitTimer = setTimeout(() => {
    this.submit();
    console.log('Submitted after 5 seconds');
  }, 5000)
};