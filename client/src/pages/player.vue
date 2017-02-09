<template>
    <div class="window">
        <ul>
            <li v-for="player in players">
                {{ player.name }}
                <input type="button" value="使用" @click='postPlayerUse(player._id)'>
            </li>
        </ul>
        帐号
        <input v-model="name" placeholder="">
        <input type="button" value="创建角色" @click='postPlayerCreate()'>
    </div>
</template>

<script>
    export default {
        name: 'player',
        data() {
            return {
                players: '',
                name: '',
            }
        },
        created: function () {
            this.getPlayer();
        },
        sockets: {
            getPlayer: function (players) {
                this.players = players;
            },
            postPlayerCreate: function (players) {
                this.getPlayer(players);
            },
        },
        methods: {
            getPlayer: function () {
                this.$socket.emit('getPlayer', '');
            },
            postPlayerCreate: function () {
                this.$socket.emit('postPlayerCreate', this.name);
            },
            postPlayerUse: function (id) {
                this.$socket.emit('postPlayerUse', id);
            },
        },
    }
</script>

<style scoped>

</style>
