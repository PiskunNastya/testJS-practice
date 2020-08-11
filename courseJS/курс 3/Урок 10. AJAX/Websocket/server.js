const WebSocket = require('ws');

const server = new WebSocket.Server({port: 3000});

server.on('connection', ws => {
    ws.send('Howdy, students!')
})