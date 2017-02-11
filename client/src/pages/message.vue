<template>
    <div class="window">
        <input v-model="title" placeholder="title">
        <input v-model="content" placeholder="content">
        <ul>
            <li v-for="player_all in players_all">
                {{ player_all.name }}
                <input type="button" value="发送信息" @click='postMessage(player_all._id)'>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'message',
        data() {
            return {
                to: '',
                title: '',
                content: '',
                players_all: '',
            }
        },
        created: function () {
            this.getPlayerAll();
        },
        sockets: {
            getPlayerAll: function (players) {
                this.players_all = players;
            },
        },
        methods: {
            postMessage: function (id) {
                this.$socket.emit('postMessage', {
                    to: id,
                    title: this.title,
                    content: this.content,
                    type: 0,
                });
            },
            getPlayerAll: function () {
                this.$socket.emit('getPlayerAll', '');
            },
        },
    }
</script>

<style scoped>

</style>
