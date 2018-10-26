<template>
  <div id="app">
   <header>
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/signup">SIGNUP</router-link>
        <router-link to="/signin">SIGNIN</router-link>
        <router-link to="/profile">PROFILE</router-link>
        <router-link to="/">HOME</router-link>
      </nav>
      <button @click="logoutUser">Logout</button>
    </header>
    <router-view />
    <footer>
     <small>Authored by Betty Kebenei</small>
    </footer>
  </div>
</template>

<script>
import Home from './components/home';

export default {
  name: 'app',
  components: {
    'home': Home,
  },

  methods: {
    logoutUser(){
      localStorage.clear();
      this.$router.push({name: 'signin'})
    }
  }
}
</script>

<style src="./styles/app.css">
</style>
