<template>
    <div class="window">
        <button @click="goPlayerStatus()">status</button>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {}
        },
        created: function () {
            this.$socket.emit('player_status');
        },
        methods: {
            goPlayerStatus: function () {
                this.$router.push('player/status');
            },
        },
    }
</script>

<style scoped>

</style>
