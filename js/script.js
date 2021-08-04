let chat = "";
let chatRequest = function() {
    
    let request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages");
    request.then(chatOrganizer);
}

let chatOrganizer = answer => {
    let messagesArray = answer.data;
    console.log(messagesArray);
    chat = ""
    messagesArray.forEach(messageCreator);
}


let messageCreator = element => {
    let message = `<li class = ${categorySeparator(element)}>
            <p> <span class="time">(${element.time})</span><span class = "negrito"></span>${element.from}</span> para <span class = "negrito">${element.to}</span>: ${element.text}</p>
    </li>`

    chat += message;
    document.querySelector(".chat").innerHTML = chat;
} 

let categorySeparator = element => {
    
    if (element.type === "status") {
        return "status-message";
    } else if (element.type === "message"){
        return "regular-message"
    } else {
        return "private-message"
    }

}

chatRequest();

setInterval(chatRequest, 3000);

