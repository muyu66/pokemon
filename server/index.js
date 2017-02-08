// 加载 Socket 框架
import Koa from 'koa.io';
const App = Koa();

// 加载路由表
import RouteMain from './app/routes/main';

// middleware for koa
App.use(function *() {

});

// middleware for socket.io's connect and disconnect
App.io.use(function *(next) {
    console.log('a user connected');
    yield* next;
    console.log('a user disconnected');
});

new RouteMain(App);

App.listen(8081);