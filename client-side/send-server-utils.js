/* --- utils for sending text to the server --- */
var url = 'ws://localhost:8080';

function sendText(text) {
    var socket = new WebSocket(url);
    socket.onopen = function (event) {
        socket.send(text);
        socket.close();
    };
}