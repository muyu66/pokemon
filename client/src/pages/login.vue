<template>
    <div class="window">
        <input :model="message">
        <input type="button" value="login" @click='login'>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                message: '',
            }
        },
        sockets: {
            connect: function () {
                console.log('成功连接服务器');
            }
        },
        methods: {
            login: function () {
                this.$socket.emit('login', this.message);
                this.$router.push('index');
            },
        }
    }
</script>

<style scoped>

</style>
