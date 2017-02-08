import AuthCtl from '../controllers/auth';
import PlayerCtl from '../controllers/player';
import MonsterCtl from '../controllers/monster';

import AuthMiddleware from '../middlewares/auth';


export default class Main {
    constructor(app) {
        app.io.route('*', function *(next, params) {

            // 路由中间件 - 验证是否有登录状态
            let excepts = ['postAuthLogin', 'postAuthRegister'];
            if (excepts.indexOf(this.event) === -1) {
                new AuthMiddleware(this);
            }

            switch (this.event) {
                case 'postAuthLogin':
                    new AuthCtl(this.event, this, params);
                    break;
                case 'postAuthRegister':
                    new AuthCtl(this.event, this, params);
                    break;
                case 'getPlayer':
                    new PlayerCtl(this.event, this, params);
                    break;
                case 'getMonster':
                    new MonsterCtl(this.event, this, params);
                    break;
            }
        });
    }
}