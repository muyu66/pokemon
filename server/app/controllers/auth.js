import Base from './base';

export default class Auth extends Base {
    static getLogin(msg) {
        console.log('user ' + msg + ' login');
    }
}