<template>
    <div class="window">
        {{ msg }}
        <!--<button @click="goPlayerStatus()">status</button>-->
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                msg: '',
            }
        },
        created: function () {
            this.$socket.emit('getPlayerStatus');
        },
        sockets: {
            getPlayerStatus: function (msg) {
                this.msg = msg;
            },
        },
        methods: {
//            goPlayerStatus: function () {
//                this.$router.push('player/status');
//            },
        },
    }
</script>

<style scoped>

</style>
