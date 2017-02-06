import Vue from 'vue'
import Socket from 'vue-socket.io'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Socket, 'http://localhost:8081');

import Index from './pages/index';
import Login from './pages/login';
import Register from './pages/register';
import PlayerStatus from './pages/player_status';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Login,
            meta: {
                title: '神奇宝贝'
            },
        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: '登录 - 神奇宝贝'
            },
        },
        {
            path: '/register',
            component: Register,
            meta: {
                title: '注册 - 神奇宝贝'
            },
        },
        {
            path: '/index',
            component: Index,
            meta: {
                title: '神奇宝贝'
            },
        },
        {
            path: '/player/status',
            component: PlayerStatus,
            meta: {
                title: '状态 - 神奇宝贝'
            },
        },
    ]
});

router.afterEach((to, from) => {
    document.title = to.meta.title;
})
;

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');