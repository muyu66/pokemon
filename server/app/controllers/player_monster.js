import Base from './base';
import PlayerMonster from '../models/player_monster';
import Monster from '../models/monster';

export default class PlayerMonsterCtl extends Base {
    getPlayerMonster(socket, id) {
        if (!id) {
            PlayerMonster.find({ player_id: socket.session.player_id }, '', function (err, model) {
                socket.emit(socket.event, model);
            }).populate('monster_id');
        } else {
            PlayerMonster.find({ player_id: id }, '', function (err, model) {
                socket.emit(socket.event, model);
            }).populate('monster_id');
        }
    }
}