const Koa = require('koa');
const Cross = require('koa-cors')();
const App = Koa();
const Http = require('http').Server(App.callback());
const Io = require('socket.io')(Http);

App.use(Cross);

// 加载 路由
require('./src/routes/main')(App);

Io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('login', function (msg) {
        console.log('message: ' + msg);
    });
});

Http.listen(8081, function () {
    console.log('listening on *:8081');
});
