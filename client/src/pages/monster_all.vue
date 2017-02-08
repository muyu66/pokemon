<template>
    <div class="window">
        <ul>
            <li v-for="monster in monsters">
                {{ monster }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'monster_all',
        data() {
            return {
                monsters: {},
            }
        },
        created: function () {
            this.getMonster();
        },
        sockets: {
            getMonster: function (monsters) {
                this.monsters = monsters;
            },
        },
        methods: {
            getMonster: function () {
                this.$socket.emit('getMonster', 'all');
            },
        },
    }
</script>

<style scoped>

</style>
