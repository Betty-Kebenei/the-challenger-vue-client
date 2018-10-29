<template>
  <div id="app">
   <header>
      <img src="./assets/logo.png">
      <nav v-show="!token">
        <router-link to="/signup">SIGNUP</router-link>
        <router-link to="/signin">SIGNIN</router-link>
      </nav>

      <div class="caret" v-show="token">
        <font-awesome-icon 
          v-show="token && !showDropDown"
          icon='caret-down'
          size="2x"
          @click="showDropDown = true"
        />
        <font-awesome-icon 
          v-show="token && showDropDown"
          icon='caret-up'
          size="2x"
          @click="showDropDown = false"
        />
        <div v-show="showDropDown" class="drop-down">
          <ul>
            <li @click="profile">My Profile</li>
            <li @click="logoutUser">Sign Out</li>
          </ul>
        </div>
      </div>

      <div class="user-icon" v-show="token" @click="showDropDown = true">
        <font-awesome-icon icon="user" size='4x'/>
      </div>

      
      
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

  data(){
    return {
      token: false,
      showDropDown: false
    }
  },

  mounted(){
    const accessToken = localStorage.getItem('access-token');
    if(accessToken){
      this.token = true;
    }
  },

  methods: {
    logoutUser(){
      localStorage.clear();
      this.$router.push({name: 'signin'})
    },

    profile(){
      this.$router.push({name: 'profile'})
    }
  }
}
</script>

<style src="./styles/app.css">
</style>
