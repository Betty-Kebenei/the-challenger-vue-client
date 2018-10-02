<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>
    <leftNav>
      <p>This is the left navbar </p>
    </leftNav>
    <main>
      <h1>Main content</h1>
    </main>
    <footer>
      <small> Authored by Betty </small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="./styles/app.css">
</style>
