<template>
    <div class="window">
        {{ $route.params.id }}
        <ul>
            <li v-for="monster in monsters">
                {{ monster.monster_id.name }}
                {{ monster.level }}
            </li>
        </ul>
        <input type="button" value="post" @click='postMy(111)'>
        {{ position }}
    </div>
</template>

<script>
    export default {
        name: 'fight',
        data() {
            return {
                monsters: [],
                position: '',
            }
        },
        created: function () {
            this.getPlayerMonster();
        },
        sockets: {
            getPlayerMonster: function (monsters) {
                this.monsters = monsters;
            },
            postMy: function (position) {
                this.position = position;
            },
        },
        methods: {
            getPlayerMonster: function () {
                this.$socket.emit('getPlayerMonster');
            },
            postMy: function (position) {
                let data = {
                    id: this.$route.params.id,
                    position: position,
                };
                this.$socket.emit('postMy', data);
            },
        },
    }
</script>

<style scoped>

</style>
