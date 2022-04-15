const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const alertBox = document.getElementsByClassName('alert')[0];
const alert_msgBox = document.getElementById('alert-msg');
let admin = JSON.parse(localStorage.getItem("admin_auth"))| undefined

const default_admin = {
    username: "qbentil",
    password: "Admin123"
}
if(admin === 0)
{
    localStorage.setItem("admin_auth", JSON.stringify(default_admin))
    admin = JSON.parse(localStorage.getItem("admin_auth"))
}


document.getElementById("login_form").addEventListener("submit", (e) =>{
    e.preventDefault()
    let password = passwordInput.value
    let username = usernameInput.value

    if(password.length <= 0 && username.length <= 0)
    {
        flag_alert("Enter username and Password")
        return;
    }else if(username !== admin.username | password !== admin.password){
        flag_alert("Invalid username or Password")
    }else{
        // Redirect to Admin Page
        // alert("Go to dashboard")
        let auth_state = {
            loggedIn: 1
        }

        localStorage.setItem("auth_state", JSON.stringify(auth_state))
        window.location.replace("/dashboard.html");
    }

    
    
})

function flag_alert(msg)
{
    alert_msgBox.innerText = msg;
    alertBox.classList.add("alert-danger")
    alertBox.style.display = 'block'
}



// Footer
let today 
document.getElementById("year").innerText = new Date().getFullYear()