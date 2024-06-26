const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
     port: PORT
});

wsServer.on('connection',function(socket){
    //feedback just to make sure its working lol
    console.log('A client just connected');

    //behavior for incoming socket
    socket.on('message',function (msg){
        console.log("Received message from client: "+ msg);
        //socket.send("Take this back: " +msg);

        //Broadcast to all clients
        wsServer.clients.forEach(function(client){
            client.send("Take this back: "+msg);
        });
    });
});

console.log((new Date()) + "Server is listening on port "+PORT);