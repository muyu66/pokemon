<template>
    <div class="window">
        <ul>
            <li v-for="monster in monsters">
                {{ monster.monster_id.name }}
                {{ monster.level }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'fight',
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
