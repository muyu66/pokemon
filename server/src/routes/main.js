import Base from './base';
import Auth from '../controllers/auth';

export default class Main extends Base {
    constructor(msg, ctl, method) {
        super();
        switch (ctl) {
            case 'auth':
                return new Auth(msg, method);
        }
    }
}