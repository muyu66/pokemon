import Base from './base';
import Player from '../models/player';

export default class PlayerCtl extends Base {
    getPlayer(socket, empty) {
        Player.find({ user_id: socket.session.id }, '', function (err, model) {
            socket.emit(socket.event, model);
        });
    }

    getPlayerMy(socket, empty) {
        Player.findOne({ _id: socket.session.player_id }, '', function (err, model) {
            socket.emit(socket.event, model);
        });
    }

    getPlayerAll(socket, empty) {
        Player.find({}, '', function (err, model) {
            console.log(model);
            socket.emit(socket.event, model);
        });
    }

    postPlayerCreate(socket, name) {
        let self = this;
        let player = new Player({
            name: name,
            user_id: socket.session.id,
            position: { x: 1, y: 1 },
        });
        player.save(function () {
            console.log('created ' + player.name);
            self.getPlayer(socket, 'all');
        });
    }

    postPlayerUse(socket, id) {
        Player.findOne({ _id: id }, '', function (err, model) {
            console.log('used ' + model.name);
            let tmp = {
                'player_id': model._id,
            };
            socket.session = Object.assign(socket.session, tmp);
            socket.emit(socket.event, 'ok');
        });
    }
}