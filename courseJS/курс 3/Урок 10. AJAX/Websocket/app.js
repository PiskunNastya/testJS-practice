const { stat } = require("fs");

const status = document.getElementById('status');
const message = document.getElementById('messages');

const ws = new WebSocket('ws://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage() {
    const li = document.createElement('li');

    li.innerHTML = value;
    message.appendChild(li);
}

ws.onopen = () => setStatus('ONLINE');

ws.close = () => setStatus("DISCONNECTED");

ws.onmessage = response => printMessage(response.data)