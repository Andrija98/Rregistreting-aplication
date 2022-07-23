const messageForm = document.getElementById("mesageForm");




function messageHandler() {
    const nameInput = messageForm.querySelector("#name").value;
    const emailInput = messageForm.querySelector("#email").value;
    const messageText = messageForm.querySelector("#message").value;

    console.log(nameInput, emailInput, messageText);
    console.log(messageForm);

    fetch("http://localhost:3000/message",{
        method: "POST",
        body: JSON.stringify({
            name: nameInput, 
            email: emailInput, 
            message: messageText
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json()
    }).then( data => {
        
        const div = document.createElement("div");
        const h2 = document.createElement("h2");

        div.insertAdjacentElement("afterbegin", h2);
        messageForm.replaceWith(div);

        h2.innerText = data;
        
        console.dir(data);
    })
}

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    messageHandler();
})



