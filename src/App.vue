<template>
  <div id="app">
   <header>
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/signup">SIGNUP</router-link>
        <router-link to="/signin">SIGNIN</router-link>
        <router-link to="/">HOME</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import Home from './components/home';

export default {
  name: 'app',
  components: {
    'home': Home,
  }
}
</script>

<style src="./styles/app.css">
</style>
