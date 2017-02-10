import Base from './base';
import Area from '../models/area';

export default class MapCtl extends Base {
    getMap(socket, position) {
        Area.findOne({
            position: {
                "y": position.y,
                "x": position.x
            }
        }, '', function (err, model) {
            console.log('in ' + model.name);
            socket.emit(socket.event, model);
        });
    }
}