const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', 'views');

const frontRoutes = require('./routes/frontRoutes');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', frontRoutes);

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId);
        })
    })
})

server.listen(proccess.env.port || 3000);