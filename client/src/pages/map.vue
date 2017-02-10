<template>
    <div class="window">
        {{ my_player }}
        {{ map }}
        <input type="button" value="获取我的位置" @click='getMap()'>
    </div>
</template>

<script>
    export default {
        name: 'map',
        data() {
            return {
                my_player: '',
                map: '',
            }
        },
        created: function () {
            this.getPlayerMy();
        },
        sockets: {
            getPlayerMy: function (player) {
                this.my_player = player;
            },
            getMap: function (map) {
                this.map = map;
            },
        },
        methods: {
            getPlayerMy: function () {
                this.$socket.emit('getPlayerMy', '');
            },
            getMap: function () {
                this.$socket.emit('getMap', this.my_player.position);
            },
        },
    }
</script>

<style scoped>

</style>
