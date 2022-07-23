const form = document.querySelector(".container").querySelector("form");
const btnUsers = document.querySelector(".btn-users");

let registratedUsers = [];



    

function registrateUser(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username.trim().length < 5|| password.trim().length < 5){
        alert("Username and password should be minimum 5 caracter long")
        return;
    }
    

    fetch('http://localhost:3000/post1', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const a = document.createElement("a");

        div.insertAdjacentElement("afterbegin", h2);
        div.insertAdjacentElement("beforeend", a);
        form.replaceWith(div);

        h2.innerText = data;
        a.href = "http://localhost:8080/pages/login.html";
        a.innerText = 'Log in';
        a.classList.add("btn-login");
        console.dir(data);
    })
    
    
}

function storedToken(){
    window.localStorage["auth"] = "1";
    console.log(window.localStorage.auth);
}

// function validation(){
//     if(window.localStorage["auth"]){
//         document.body.style.display = "none"
//         console.log(document.body);
//     }else{
//         console.log("Its not!");
//     }
// }

  
form.addEventListener("submit", (event) => {
    event.preventDefault();
    registrateUser()
});