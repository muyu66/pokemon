import Base from './base';

export default class FightCtl extends Base {
    postMy(socket, data) {
        console.log('join room ' + data.id);
        socket.join(data.id);
        socket.emit(socket.event, data.position);
    }

    getEnemy(socket, empty) {
        // socket.join('some room');
        // socket.emit(socket.event, 'jjj');
    }
}