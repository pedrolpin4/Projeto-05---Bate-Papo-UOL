let chat = "";
let user = {};
user.name = prompt("What's your pretty name?");

let pullName = function (){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants",
    user)
    .catch(treatError);
}

let treatError = function(error){
    user.name = prompt("What's your pretty name?");
}

pullName();

setInterval(function (){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/status", user);
}, 5000);

let participants = [];

let participantsRequest = function(){
    participants = [];
    axios.get ("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants")
    .then(printParticipants)
}

let printParticipants = function(answer){
    participants = answer.data;
    console.log(participants);
}

setInterval(participantsRequest(), 3000);

let chatRequest = function() {
    let request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages");
    request.then(chatOrganizer);
}

let chatOrganizer = answer => {
    let answerArray = answer.data;
    chat = "";
    answerArray.forEach(messageApiCreator);
    scrollIntoView();
}


let messageApiCreator = element => {
    let message = `<li class = ${categorySeparator(element)}>
            <p> <span class="time">(${element.time})</span><span class = "negrito">${element.from}</span> para <span class = "negrito">${element.to}</span>: ${element.text}</p>
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

let messageBefore = "";

scrollIntoView = function() {
    let lastMessage = document.querySelector(".chat li:last-child");
    if (messageBefore != lastMessage.innerHTML){
        lastMessage.scrollIntoView();
    }
    messageBefore = lastMessage.innerHTML;
}

chatRequest();

setInterval(chatRequest, 3000);

let sendMessage = function (){
    let message = {};
    messageCreator(message);
    console.log(message);
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages", message).then(chatRequest);
}

let messageCreator = function(message){
    message.from = user.name;
    message.to = "todos";
    let value = document.querySelector("input").value;
    message.text = value;
    message.type = "message";
}

let showHub = function (){
    let hub = document.querySelector(".hub");
    console.log(hub);
    hub.classList.remove("hub");
    hub.classList.add("hub-showed");
}

