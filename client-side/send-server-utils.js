/* --- utils for sending text to the server --- */
var url = 'ws://localhost:8080';

function sendText() {
    var socket = new WebSocket(url);
    socket.onopen = function (event) {
        socket.send("hello world");
        socket.close();
    };
}

/* -------------- Once the page has loaded -------------- */
document.addEventListener('DOMContentLoaded', function () {
    var send_btn = document.getElementById('send_btn');
    send_btn.addEventListener('click', sendText);
});