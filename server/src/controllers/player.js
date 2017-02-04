export default function () {
    let Mongoose = require('mongoose');
    Mongoose.connect('mongodb://localhost/pokemon');
    let db = Mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("MongoDB Opened!");
    });

    let Player = Mongoose.model('Player', { name: String, gold: Number });

    yield Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
        return model;
    })
}


// import Base from './base';
//
// export default class Player extends Base {
//     static getStatus() {
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
//         yield Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
//             return model;
//         })
//     }
// }