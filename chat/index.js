

function sendMessage() {
    var messageInput = document.getElementById("chat-input");
    var message = messageInput.value;
    var chatMessages = document.getElementById("chat-form");
    chatMessages.innerHTML += `<p class="message">${message}</p>`
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// let nom = "amine"
var chat = document.getElementById("chat-form");
function replace2() {
    let titel = document.getElementById("chatting");
    titel.innerHTML = "samy chating ....";
    chat.innerHTML += `
                      <button onclick="Message2()" id="send2">send</button>
    
                        `
    
}

function Message2() {
    var messageInput = document.getElementById("chat-input");
    var message = messageInput.value;
    var chatMessages = document.getElementById("chat-form");
    chatMessages.innerHTML += `<p class="message" style= " background-color:red">${message}</p>`
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function replace1() {
    let titel = document.getElementById("chatting");
    titel.innerHTML = "amine chating ....";

}










