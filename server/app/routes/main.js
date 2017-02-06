import User from '../models/user';
import Player from '../models/player';

export default class Main {
    constructor(app) {
        app.io.route('postAuthLogin', function *(next, user) {
            let socket = this;
            User.findOne({ account: user.account }, 'account password', function (err, model) {
                if (model.password === user.password) {
                    socket.emit('postAuthLogin', 'ok');
                    console.log('user ' + user.account + ' logined');
                } else {
                    socket.emit('postAuthLogin', 'failed');
                    console.log('user ' + user.account + ' login failed');
                }
            });
        });

        app.io.route('postAuthRegister', function *(next, user) {
            let socket = this;
            let model = new User({ account: user.account, password: user.password });
            model.save(function () {
                socket.emit('postAuthRegister', 'ok');
                console.log('user created ', user);
            });
        });

        //todo
        app.io.route('getIllustrated', function *(next, name) {
            let socket = this;
            Player.findOne({ name: name }, 'name power', function (err, model) {
                socket.emit('getIllustrated', model);
            });
        });

        app.io.route('getPlayerStatus', function *(next, message) {
            let socket = this;
            Player.findOne({ name: '小智' }, 'name gold', function (err, model) {
                socket.emit('getPlayerStatus', model);
            });
        });
    }
}