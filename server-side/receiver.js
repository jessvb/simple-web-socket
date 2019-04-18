// FROM: https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61

var WebSocketServer = require('websocket').server;
var http = require('http');

var port = 8080;

var server = http.createServer(function (request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});
server.listen(port, function () {});

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // process WebSocket message
            console.log("message type: " + message.type);
            console.log("data: " + message.utf8Data);
            console.log(message);
        }
    });

    connection.on('close', function (connection) {
        // close user connection
        console.log("Closed connection.");
    });
});