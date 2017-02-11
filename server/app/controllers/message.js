import Base from './base';
import Message from '../models/message';

export default class MessageCtl extends Base {
    postMessage(socket, object) {
        let model = new Message({
            from: socket.session.player_id,
            to: object.to,
            title: object.title,
            content: object.content,
            type: object.type,
        });

        model.save(function () {
            console.log(model.from + ' send message to ' + model.to);
        });
    }
}