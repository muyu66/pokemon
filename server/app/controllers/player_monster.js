import Base from './base';
import PlayerMonster from '../models/player_monster';

export default class PlayerMonsterCtl extends Base {
    getPlayerMonster(socket, player_id) {
        PlayerMonster.find({ player_id: player_id }, '', function (err, model) {
            socket.emit(socket.event, model);
        });
    }
}