// Form Validation:
const sName = document.getElementById('sName');
const sID = document.getElementById('sID');
const rNum = document.getElementById('rNum');
const rMsg = document.getElementById('rMsg');
 //Get alert box
const alert_ = document.getElementsByClassName('alert')[0];
const alert_type = document.getElementById('alert-type');
const alert_msg = document.getElementById('alert-msg');


alert_.classList.add("alert-danger");
alert_.style.display = 'none'

document.getElementById("btn_send").addEventListener('click', validate_form)
function validate_form()
{
    
    let hasError = input_handler(sName, "Enter your full name");
    if(!hasError)
    {
        hasError = input_handler(sID, "Enter your student ID", true);
    }
    if(!hasError)
    {
        hasError = input_handler(rNum, "Enter your room number", true)
    }

    if(!hasError)
    {
        hasError = input_handler(rMsg, "Enter your report message")
    }


    
    
    
}


function flag_alert(msg, type = 'ERROR')
{
    alert_type.innerText = type
    alert_msg.innerText = msg;
    type == "ERROR"? alert_.classList.add("alert-danger"): alert_.classList.add("alert-success")
    type == "ERROR"? alert_.style.display = 'block': alert_.style.display = 'none'
}

function input_handler(input, msg, isNum = false)
{
    let type = "SUCCESS"
    if(isNum == true)
    {
        if(input.value == "")
        {
            input.style.borderColor = "#f00"
            type = "ERROR"
            flag_alert(msg, type)
            return true
        }else if(isNaN(parseFloat(input.value)))
        {
            input.style.borderColor = "#f00"
            type = "ERROR"
            flag_alert("Field must be a number", type)
            return true 
        }else{
            input.style.borderColor = "#0f0"
            flag_alert(msg, type)
            return false
        }
    }else{
        
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
}
