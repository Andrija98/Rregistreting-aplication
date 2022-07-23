const logoutBtn = document.getElementById("logout");
const aboutPage = document.getElementById("about-page");


function logingOut() { 
    if(window.localStorage["auth"]){
        console.log("You are Logged");
    }else{
        window.location.replace('/pages/login.html');
    }

}

logoutBtn.addEventListener("click", () => {
    window.localStorage.removeItem("auth");
    logingOut();
})

logingOut();



