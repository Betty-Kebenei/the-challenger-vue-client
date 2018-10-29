<template>
    <div class="user-profile">
        <div class="user-icon">
            <font-awesome-icon icon="user" size='8x'/>
        </div>
        <div class="user-name">
            <p>{{user.username.toUpperCase()}}</p>
        </div>

        <br />
        <div class="contacts">
            <h2>Contacts</h2>
            <p><strong>Email:</strong></p>
            <p><strong>Tel:</strong></p>

            <br />
            <p><strong>Place of fellowship (Church):</strong></p>
        </div>

        <br />
        <div class="bio">
            <h2>Bio</h2>
        </div>
       
    </div>
</template>

<script>
import axiosInstance from "../axiosInstance.js"; 

export default {
  name: 'profile',

  data(){
      return {
          user: {}
      }
  },
  
  mounted () {
    this.fetchUser();
  },

    methods: {
        fetchUser () {
        axiosInstance
            .get('http://localhost:3001/api/v1/user')
            .then(response => { 
                this.user = response.data;
            })
            .catch((error) => {})
        },
    }
}
</script>

<style scoped src="../styles/profile.css">
</style>
