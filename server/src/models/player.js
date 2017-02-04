let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');

let User = mongoose.model('Player', { name: String, gold: Number });

module.exports = {
    thereIs: function () {
        try {
            let a = yield User.find({ name: '小智' });
            return a;
        } catch (e) {
            console.log(e);
        }
    },
};


// // let mongoose = require('../commons/db');
// //
// // let Player = mongoose.model('Player', { name: String, gold: Number });
// //
// // let co = require('co');
// // let thunkify = require('thunkify');
// // let find = thunkify(function () {
// //     Player.find.apply(Player, arguments)
// // });
//
// module.exports = {
//
//     // aaaa: function () {
//     //     let mongoose = require('mongoose');
//     //     mongoose.connect('mongodb://localhost/pokemon');
//     //
//     //     let Player = mongoose.model('Player', { name: String, gold: Number });
//     //     Player.findOne({ name: '小智' }, 'name gold', function (err, player) {
//     //         return {
//     //             status_code: 200,
//     //             status_msg: 'ok',
//     //
//     //             name: player.name,
//     //             coin: player.gold,
//     //         };
//     //     });
//     //
//     //
//     //
//     //
//     //     // return co(function *() {
//     //     //     try {
//     //     //         let article = yield find();
//     //     //         return article;
//     //     //     } catch (err) {
//     //     //         console.log(err);
//     //     //     }
//     //     // })
//     // },
// };