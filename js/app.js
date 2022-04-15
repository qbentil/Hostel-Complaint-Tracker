// Form Validation:
const sName = document.getElementById('sName');
const sID = document.getElementById('sID');
const rNum = document.getElementById('rNum');
const rMsg = document.getElementById('rMsg');
const report_form = document.getElementById('report_form');

 //Get alert box
const alert_ = document.getElementsByClassName('alert')[0];
const alert_type = document.getElementById('alert-type');
const alert_msg = document.getElementById('alert-msg');
const msgCount = document.getElementById('msgCount');

// Create Reports Storage 
let reports = JSON.parse(localStorage.getItem('reports')) || []

const MAX_COUNT = 500;
// Set MSG Count
msgCount.innerText = MAX_COUNT


document.getElementById("btn_send").addEventListener('click', form_handler)
rMsg.addEventListener('keydown', () => {
    character_count(rMsg.value.length)
    
})
function form_handler()
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

    if(!hasError)
    {
        let report = {
            id: "id" + Math.random().toString(16).slice(2),
            user: {
                id: sID.value,
                name: sName.value,
                rid: rNum.value,
                msg: rMsg.value
            }
        }
        reports.push(report)
        localStorage.setItem("reports", JSON.stringify(reports))
        flag_alert("Report Created successfuly!, Wait on feedback from Hostel Administrator", "SUCCESS")
        
       report_form.reset();
    }
    

}


function flag_alert(msg, type = 'ERROR')
{
    alert_type.innerText = type
    alert_msg.innerText = msg;
    type == "ERROR"? alert_.classList.add("alert-danger"): alert_.classList.add("alert-success")
    type == "ERROR"? alert_.style.display = 'block': alert_.style.display = 'none'
    type == "SUCCESS"? alert_.style.display = "block": null
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

function character_count(num)
{
    let rem = MAX_COUNT - num;
    msgCount.innerText = rem
}

let today 
document.getElementById("year").innerText = new Date().getFullYear()