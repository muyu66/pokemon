<template>
    <div class="window">
        帐号
        <input v-model="account" placeholder="">
        密码
        <input v-model="password" placeholder="">
        <input type="button" value="register" @click='postAuthRegister'>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                account: '',
                password: '',
            }
        },
        sockets: {
            postAuthRegister: function (msg) {
                console.log(msg);
            },
        },
        methods: {
            postAuthRegister: function () {
                let user = { account: this.account, password: this.password };
                this.$socket.emit('postAuthRegister', user);
//                this.$router.push('index');
            },
        }
    }
</script>

<style scoped>

</style>
