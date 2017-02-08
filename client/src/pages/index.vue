<template>
    <div class="window">
        <button @click="goPlayer()">Player</button>
        <button @click="goMonsterAll()">MonsterAll</button>
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
        },
    }
</script>

<style scoped>

</style>
