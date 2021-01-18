<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row mt-4">
      <Main />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
