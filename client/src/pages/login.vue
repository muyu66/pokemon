<template>
    <div class="window">
        帐号
        <input v-model="account" placeholder="">
        密码
        <input v-model="password" placeholder="">
        <input type="button" value="登录" @click='postAuthLogin'>
        <input type="button" value="注册" @click='goRegister'>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                account: '',
                password: '',
            }
        },
        sockets: {
            connect: function () {
                console.log('成功连接服务器');
            },
            postAuthLogin: function (msg) {
                console.log(msg);
            },
        },
        methods: {
            postAuthLogin: function () {
                let user = { account: this.account, password: this.password };
                this.$socket.emit('postAuthLogin', user);
                this.$router.push('index');
            },
            goRegister: function () {
                this.$router.push('register');
            },
        }
    }
</script>

<style scoped>

</style>
