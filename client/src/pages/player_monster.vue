<template>
    <div class="window">
        {{ monsters }}
    </div>
</template>

<script>
    export default {
        name: 'player_monster',
        data() {
            return {
                monsters: [],
            }
        },
        created: function () {
            this.getPlayerMonster();
        },
        sockets: {
            getPlayerMonster: function (monsters) {
                this.monsters = monsters;
            },
        },
        methods: {
            getPlayerMonster: function () {
                this.$socket.emit('getPlayerMonster');
            },
        },
    }
</script>

<style scoped>

</style>
