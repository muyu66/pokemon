<template>
    <div class="window">
        <button @click="goPlayer()">Player</button>
        <button @click="goMonsterAll()">MonsterAll</button>
        <button @click="goFight()">Fight</button>
        <button @click="goMap()">Map</button>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {}
        },
        methods: {
            goPlayer: function () {
                this.$router.push('player');
            },
            goMonsterAll: function () {
                this.$router.push('monster_all');
            },
            goFight: function () {
                this.$router.push('fight');
            },
            goMap: function () {
                this.$router.push('map');
            },
        },
    }
</script>

<style scoped>

</style>
