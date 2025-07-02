const WebSocket = require("ws");


const server = new WebSocket.Server({port:3000});

server.on("connection" , (socket)=>{
    console.log("Client connected ");

    socket.send("hello web socket  ");
    socket.on("message" , (message)=>{
        console.log(message);
        socket.send("hello from server ");
    });
});

// const socket = new WebSocket("ws://localhost:3000");

// socket.onmessage = (event)=>{
//     console.log(event.data);
// }

console.log("websocket server running at ws://localhost:3000");