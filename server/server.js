const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit from Admin text Welcome to chat
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat',
        createdAt: Date.now()
    });

    // socket.broadcast.emit from Admin text new user joined
    socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text: 'New user joined the chat.',
        createdAt: Date.now()
    });

    socket.on('createMessage', (newMessage) => {
        newMessage.createdAt = Date.now();
        console.log('createMessage:', JSON.stringify(newMessage, undefined, 2));
        io.emit('newMessage', newMessage);
        // socket.broadcast.emit('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});