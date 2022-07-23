const form = document.getElementById("login-form");

let isLogged = false;

function logingHandler(){
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);
    fetch('http://localhost:3000/loging', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        isLogged = data;
        
        validation();
    })

}



function validation(){
    if(isLogged){
        window.localStorage["auth"] = 1;
        window.location.assign("http://localhost:8080/pages/main.html");
    }else{
        alert("Please Enter CorrectUsername and password");
        window.localStorage.removeItem("auth");
    }
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    logingHandler();
})


