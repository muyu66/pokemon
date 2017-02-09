import Base from './base';
import Player from '../models/player';

export default class PlayerCtl extends Base {
    getPlayer(socket, empty) {
        Player.find({ user_id: socket.session.id }, '', function (err, model) {
            socket.emit(socket.event, model);
        });
    }

    postPlayerCreate(socket, name) {
        let self = this;
        let player = new Player({
            name: name,
            user_id: socket.session.id,
        });
        player.save(function () {
            console.log('created ' + player.name);
            self.getPlayer(socket, '');
        });
    }

    postPlayerUse(socket, id) {
        Player.findOne({ _id: id }, '', function (err, model) {
            console.log(model);
            socket.emit(socket.event, 'ok');
        });
    }
}