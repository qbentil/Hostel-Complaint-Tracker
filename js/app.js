// Form Validation:
const sName = document.getElementById('sName');
const sID = document.getElementById('sID');
const rNum = document.getElementById('rNum');
const rMsg = document.getElementById('rMsg');
 //Get alert box
const alert = document.getElementsByClassName('alert')[0];
const alert_type = document.getElementById('alert-type');
const alert_msg = document.getElementById('alert-msg');


alert.classList.add("alert-danger");
alert.style.display = 'none'

document.getElementById("btn_send").addEventListener('click', validate_form)
function validate_form()
{
    
    let hasError =  handle_input_error(sName, "Enter your full name");
    handle_input_error(sID, "Enter your full name");


    
    
    
}


function flag_alert(msg, type = 'ERROR')
{
    alert_type.innerText = type
    alert_msg.innerText = msg;
    type == "ERROR"? alert.classList.add("alert-danger"): alert.classList.add("alert-success")
    type == "ERROR"? alert.style.display = 'block': alert.style.display = 'none'
}

function handle_input_error(input, msg)
{
    let type = "SUCCESS"
    if(input.value == "")
    {
        input.style.borderColor = "#f00"
        type = "ERROR"
        flag_alert(msg, type)
        return true
    }else{
        input.style.borderColor = "#0f0"
        flag_alert(msg, type)
        return false
    }
}