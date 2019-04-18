# simple-web-socket
A simple websocket connection using Node.js. This websocket sends text from JavaScript in an HTML webpage to a Node.js server.

## usage
To set up the websocket, first open a terminal in the `server-side` directory and install the required packages:
```bash
cd server-side
npm install
```

Once you have installed the packages, start the node server:
```bash
node receiver.js
```

Now, in the `client-side` directory, open the webpage called `index.html` and click the `send` button. This calls the `sendText()` function in the `index.js` file, which sends the text, `hello world` through the websocket to the `receiver.js` node. You should see the text, `hello world` and some other information printed in the terminal running the receiver node.

## refs
This websocket is based on the code provided in this [websocket tutorial](https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61).