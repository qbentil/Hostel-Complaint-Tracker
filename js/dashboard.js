let authState = JSON.parse(localStorage.getItem("auth_state"));
const dashboard = document.getElementById('dashboard');
console.log(authState.loggedIn);

if(authState.loggedIn !== 1)
{
    alert("Sorry, You don't have admin access, Login!")
    window.location.replace("/login.html");
}else{
    dashboard.style.display = "block"
}