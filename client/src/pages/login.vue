<template>
    <div class="window">
        <input v-model="message" placeholder="">
        <input type="button" value="login" @click='goLogin'>
        <input v-model="message2" placeholder="">
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                message: '',
                message2: '',
            }
        },
        sockets: {
            connect: function () {
                console.log('成功连接服务器');
            }
        },
        methods: {
            goLogin: function () {
                this.$socket.emit('login', this.message);
//                this.$socket.on('login', function (msg) {
//                    this.message2 = msg;
//                });
//                this.$router.push('index');
            },
        }
    }
</script>

<style scoped>

</style>
