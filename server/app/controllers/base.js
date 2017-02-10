export default class Base {
    constructor(method, socket, params) {
        switch (method) {
            case 'postAuthLogin':
                this.postAuthLogin(socket, params);
                break;
            case 'postAuthRegister':
                this.postAuthRegister(socket, params);
                break;
            case 'getPlayer':
                this.getPlayer(socket, params);
                break;
            case 'getPlayerMy':
                this.getPlayerMy(socket, params);
                break;
            case 'getPlayerAll':
                this.getPlayerAll(socket, params);
                break;
            case 'getMonster':
                this.getMonster(socket, params);
                break;
            case 'postPlayerCreate':
                this.postPlayerCreate(socket, params);
                break;
            case 'postPlayerUse':
                this.postPlayerUse(socket, params);
                break;
            case 'getPlayerMonster':
                this.getPlayerMonster(socket, params);
                break;
            case 'getMap':
                this.getMap(socket, params);
                break;
            case 'postMy':
                this.postMy(socket, params);
                break;
            case 'getEnemy':
                this.getEnemy(socket, params);
                break;
            default:
                console.log('路由方法不正确');
        }
    }
}