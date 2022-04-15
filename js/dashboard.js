let authState = JSON.parse(localStorage.getItem("auth_state"));
const reports = JSON.parse(localStorage.getItem('reports')) || []
const dashboard = document.getElementById('dashboard');
const reports_tb = document.getElementById('reports_tb');

console.log(authState);

if(authState.loggedIn !== 1)
{
    alert("Sorry, You don't have admin access, Login!")
    window.location.replace("/login.html");
}else{
    dashboard.style.display = "block"

    // alert(reports.length)
    let ouput = "";

    if(reports.length <= 0)
    {
        ouput += `
        <tr>
            <td scope="row" colspan="4" class="text-primary">No report records found</td>
        </tr>
        `
    }else{
        for (let i = 0; i < reports.length; i++) {
            ouput += `
            <tr>
                <td scope="row" >${1+i}</td>
                <td scope="row" >${reports[i].user.name}</td>
                <td scope="row" >${reports[i].user.id}</td>
                <td scope="row" >${reports[i].user.rid}</td>
                <td scope="row" >${reports[i].user.msg}</td>
            </tr>
            `
            
        }

    }
    reports_tb.innerHTML = ouput;
    
}





// footer
let today 
document.getElementById("year").innerText = new Date().getFullYear()