/* CSS
.hub{
    display: none;
    flex-shrink: 0;
    overflow-y: scroll;
    align-self: flex-end;
}

.hub-showed{
    width: 259px;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
    z-index: 4;
}

.hub-showed div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    size: 16px;
    line-height: 18.75px;
    font-weight: bold;
    width: 259px;
}

.hub-showed ul{
    display: flex;
    flex-direction: column;
    height: 250px;
    flex-shrink: 0;
    overflow-y: scroll;
}

.participants-hub-title{
    height: 84px;
    margin: 30px 0px;
}

.privacy-hub-title{
    height: 66px;
    margin: 10px 0px;
}

.participants-hub li, .privacy-hub li{
    display: flex;
    font-size: 16px;
    width: 194px;
    height: 36px;
    margin-left: 20px;
    align-items: center;
    justify-content: flex-start;
}

.participants-hub ion-icon, .privacy-hub ion-icon{
    font-size: 20px;
    margin-right: 9px;
}

.user-name{
    width: 130px;
    flex-shrink: 0;
    overflow-x: hidden;
}

.opaque-check{
    color: green;
    font-size: 20px;
    opacity: 0;
}

.container{
    z-index: 0;
}

.opaque-container{
    position: absolute;
    z-index: 3;
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
}

*/

/* html

<div class="hub">
        <div class="participants-hub-title">
            <p>Escolha um contato</p>
            <p>para enviar mensagem:</p>
        </div>
        <ul class="participants-hub">
            <li> <ion-icon name = "people"></ion-icon><p>Todos</p></li>
        </ul>
        <div class="privacy-hub-title">
            <p>Escolha a visibilidade:</p>
        </div>
        <ul class="privacy-hub">
            <li><ion-icon name="lock-open"></ion-icon><p>Público</p></li>
            <li><ion-icon name="lock-closed"></ion-icon><p>Reservadamente</p></li>
        </ul>
    </div>

*/ 
/*js

let participants = [];

let pushParticipants = function(answer){
    participants = answer.data;
    console.log(participants);
}

let participantsRequest = function(){
    participants = [];
    axios.get ("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants")
    .then(pushParticipants)
}

setInterval(participantsRequest(), 10000);

let printParticipant = participant => {
    let participantName = `<li onclick = "showCheck(this)"> <ion-icon name="person-circle"></ion-icon>
    <p class = "user-name">${participant.name}</p> <ion-icon class = "opaque-check" name="checkmark-sharp"></ion-icon></li>`;
    document.querySelector(".participants-hub").innerHTML += participantName;
}


let showHub = function (){
    let hub = document.querySelector(".hub");
    hub.classList.remove("hub");
    hub.classList.add("hub-showed");
    participants.forEach(printParticipant);
    let refreshParticipants = SetInterval(participants.forEach(printParticipant), 10000);
    refreshParticipants();
}


let showCheck = function(element){
    element.querySelector(".opaque-check").opacity = "1";
}
*/