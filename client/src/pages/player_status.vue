<template>
    <div class="window">
        {{ player_status }}
    </div>
</template>

<script>
    export default {
        name: 'player_status',
        data() {
            return {
                player_status: '',
            }
        },
        created: function () {
            this.getPlayerStatus();
        },
        methods: {
            getPlayerStatus: function () {
                this.$http.get('http://localhost:8081/player/status').then((response) => {
                    this.player_status = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>

<style scoped>

</style>
