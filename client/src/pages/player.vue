<template>
    <div class="window">
        {{ player }}
    </div>
</template>

<script>
    export default {
        name: 'player',
        data() {
            return {
                player: '',
            }
        },
        created: function () {
            this.getPlayer();
        },
        sockets: {
            getPlayer: function (player) {
                this.player = player;
            },
        },
        methods: {
            getPlayer: function () {
                this.$socket.emit('getPlayer', '小智');
            },
        },
    }
</script>

<style scoped>

</style>
