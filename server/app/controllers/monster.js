import Base from './base';
import Monster from '../models/monster';

export default class MonsterCtl extends Base {
    getMonster(socket, no) {
        if (no === 'all') {
            Monster.find(function (err, model) {
                socket.emit(socket.event, model);
            });
        } else {
            Monster.findOne({ no: no }, '', function (err, model) {
                socket.emit(socket.event, model);
            });
        }
    }
}