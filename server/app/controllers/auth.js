import Base from './base';
import User from '../models/user';

export default class AuthCtl extends Base {
    postAuthLogin(socket, user) {
        User.findOne({ account: user.account }, 'account password', function (err, model) {
            if (model.password === user.password) {
                socket.emit(socket.event, 'ok');
                console.log('user ' + user.account + ' logined');
                socket.session = model.account;
            } else {
                socket.emit(socket.event, 'failed');
                console.log('user ' + user.account + ' login failed');
            }
        });
    }

    postAuthRegister(socket, user) {
        let model = new User({ account: user.account, password: user.password });
        model.save(function () {
            socket.emit(socket.event, 'ok');
            console.log('user created ', user);
        });
    }
}