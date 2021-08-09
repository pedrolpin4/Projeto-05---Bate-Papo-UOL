let chat = "";
let user = {};

let nameTheUser = function (){
    let nameValue = document.querySelector(".user-name").value;
    user.name = nameValue;
    pullName();
}

let treatError = function(){
    user.name = undefined;
    alert("This is a pretty name, but you can`t use it");
    document.querySelector(".user-name").value = "";
}

let pullName = function (){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants",
    user)
    .catch(treatError)
    .then(function(){
        if (user.name != undefined){
            document.querySelector(".entry-screen").remove();
        }
    });
}

setInterval(function (){
    if(user.name != undefined){
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/status", user);
    }
}, 5000);

let messageBefore = "";

scrollIntoView = function() {
    let lastMessage = document.querySelector(".chat li:last-child");
    if (messageBefore != lastMessage.innerHTML){
        lastMessage.scrollIntoView();
    }
    messageBefore = lastMessage.innerHTML;
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

let messageApiCreator = element => {
    if (!(element.type === "private_message" && element.to !== user.name)){
        let message = `<li class = ${categorySeparator(element)}>
                <p> <span class="time">(${element.time})</span><span class = "negrito">${element.from}</span> para <span class = "negrito">${element.to}</span>: ${element.text}</p>
        </li>`
        chat += message;
        document.querySelector(".chat").innerHTML = chat;
    }
} 

let chatOrganizer = answer => {
    let answerArray = answer.data;
    chat = "";
    answerArray.forEach(messageApiCreator);
    scrollIntoView();
}

let chatRequest = function() {
    let request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages");
    request.then(chatOrganizer);
}

chatRequest();

setInterval(chatRequest, 3000);

let messageCreator = function(message){
    message.from = user.name;
    message.to = "todos";
    let value = document.querySelector("input").value;
    message.text = value;
    message.type = "message";
}

let sendMessage = function (){
    let message = {};
    messageCreator(message);
    document.querySelector(".message-input").value = "";
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages", message).then(chatRequest);
}