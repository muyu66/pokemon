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
            case 'getMonster':
                this.getMonster(socket, params);
                break;
            case 'postPlayerCreate':
                this.postPlayerCreate(socket, params);
                break;
            case 'postPlayerUse':
                this.postPlayerUse(socket, params);
                break;
            default:
                console.log('路由方法不正确');
        }
    }
}