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
        <input type="button" value="我的角色" @click='getPlayerMy()'>
        {{ my_player }}
        <input type="button" value="我的pokemon" @click='goPlayerMonster()'>
    </div>
</template>

<script>
    export default {
        name: 'player',
        data() {
            return {
                players: '',
                my_player: '',
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
            getPlayerMy: function (player) {
                this.my_player = player;
            },
            postPlayerCreate: function (players) {
                this.getPlayer(players);
            },
        },
        methods: {
            getPlayer: function () {
                this.$socket.emit('getPlayer', '');
            },
            getPlayerMy: function () {
                this.$socket.emit('getPlayerMy', '');
            },
            postPlayerCreate: function () {
                this.$socket.emit('postPlayerCreate', this.name);
            },
            postPlayerUse: function (id) {
                this.$socket.emit('postPlayerUse', id);
            },
            goPlayerMonster: function () {
                this.$router.push('player_monster');
            },
        },
    }
</script>

<style scoped>

</style>
