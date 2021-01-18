<template>
  <footer class="header">
    <p>Made with 💗 by Carlos</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
   position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.header p{
    font-size: 16px;
    font-family: sans-serif;
    font-weight: lighter;
}
</style>
