// Form Validation:
const sName = document.getElementById('sName');
const sID = document.getElementById('sID');
const rNum = document.getElementById('rNum');
const rMsg = document.getElementById('rMsg');
const alert = document.getElementsByClassName('alert')[0]; //Get alert box


alert.classList.add("alert-danger");
alert.style.display = 'none'


document.getElementById("btn_send").addEventListener('click', validate_form)
function validate_form()
{
    
    let hasError = false;

    // Check for name
    hasError = sName.value == ""? true: false
    console.log(hasError);
}
