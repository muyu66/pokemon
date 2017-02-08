import Base from './base';
import Player from '../models/player';

export default class PlayerCtl extends Base {
    getPlayer(socket, name) {
        Player.findOne({ name: name }, 'name gold', function (err, model) {
            socket.emit(socket.event, model);
        });
    }
}