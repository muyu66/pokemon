module.exports = function (App) {

    const Route = require('koa-route');

    /**
     * 路由
     */

    App.use(Route.get('/', index));
    App.use(Route.get('/:url1/:url2', dispatch));

    /**
     * 路由方法
     */

    function* index() {
        this.body = {
            status_code: 200,
            status_msg: 'ok',
        };
    }

    function* dispatch(url1, url2) {
        this.body = require('../controllers/' + url1 + '_' + url2)();
    }

};