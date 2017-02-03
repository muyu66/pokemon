<template>
<div class="hello">
  <h1>{{ connect_status }}</h1>
  <input type="text" v-model="message">
  <input type="button" value="assaa">
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      message: '',
      connect_status: '',
    }
  },
  sockets: {
    connect: function() {
      this.connect_status = '成功连接服务器';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
