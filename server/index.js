const koa = require('koa.io');
const app = koa();
import Player from './src/models/player';

// middleware for koa
app.use(function *() {

});

// middleware for socket.io's connect and disconnect
app.io.use(function *(next) {
    console.log('a user connected');
    yield* next;
    console.log('a user disconnected');
});

// router for socket event
app.io.route('login', function *(next, message) {
    console.log('user ' + message + ' login');
});

app.io.route('getPlayerStatus', function *(next, message) {
    let socket = this;
    Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
        socket.emit('getPlayerStatus', model);
    });
});

app.listen(8081);


// // const Cross = require('koa-cors')();
// const Koa = require('koa');
// const App = module.exports = Koa();
// const Http = require('http').Server(App.callback());
// const Io = require('socket.io')(Http);
//
// // const Auth = require('./src/controllers/auth');
// // const Player = require('./src/controllers/player');
//
// // import Auth from './src/controllers/auth';
// // import Player from './src/controllers/player';
//
// // App.use(Cross);
//
// Io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
//
//     /**
//      * 路由
//      */
//     socket.on('login', function (msg) {
//         console.log(msg);
//
//
//         let Mongoose = require('mongoose');
//         Mongoose.connect('mongodb://localhost/pokemon');
//         let db = Mongoose.connection;
//         db.on('error', console.error.bind(console, 'connection error:'));
//         db.once('open', function () {
//             console.log("MongoDB Opened!");
//         });
//
//         let Player = Mongoose.model('Player', { name: String, gold: Number });
//
//         Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
//             socket.emit('login', model);
//         });
//
//
//         // return Auth.getLogin(msg);
//     });
//     // socket.on('player_status', function () {
//     // let Mongoose = require('mongoose');
//     // Mongoose.connect('mongodb://localhost/pokemon');
//     // let db = Mongoose.connection;
//     // db.on('error', console.error.bind(console, 'connection error:'));
//     // db.once('open', function () {
//     //     console.log("MongoDB Opened!");
//     // });
//     //
//     // let Player = Mongoose.model('Player', { name: String, gold: Number });
//     //
//     // Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
//     //     return yield model;
//     // })
//     // });
// });
//
// Http.listen(8081, function () {
//     console.log('listening on *:8081');
// });
