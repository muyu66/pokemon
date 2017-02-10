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
        <input type="button" value="所有角色" @click='getPlayerAll()'>
        {{ my_player }}
        <input type="button" value="我的pokemon" @click='goPlayerMonster()'>
        <ul>
            <li v-for="player_all in players_all">
                {{ player_all.name }}
                <input type="button" value="挑战" @click='goFight(player_all._id)'>
            </li>
        </ul>
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
                players_all: '',
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
            getPlayerAll: function (players) {
                this.players_all = players;
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
            getPlayerAll: function () {
                this.$socket.emit('getPlayerAll', '');
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
            goFight: function (id) {
                this.$router.push('fight/' + id);
            },
        },
    }
</script>

<style scoped>

</style>
