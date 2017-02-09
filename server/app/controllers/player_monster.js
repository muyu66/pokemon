import Base from './base';
import PlayerMonster from '../models/player_monster';
import Monster from '../models/monster';

export default class PlayerMonsterCtl extends Base {
    getPlayerMonster(socket, empty) {
        PlayerMonster.find({ player_id: socket.session.player_id }, '', function (err, model) {
            socket.emit(socket.event, model);
        }).populate('monster_id');
    }
}