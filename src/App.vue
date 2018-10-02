<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>
    <div class="leftNav">
      <ul  v-for="month in months">
        <li :key="month._id">{{ month.fromDate }} to {{ month.toDate }}</li>
      </ul>
    </div>
    <main>
      <h1>Main content</h1>
    </main>
    <footer>
      <small> Authored by Betty </small>
    </footer>
  </div>
</template>

<script>
import axios from "axios"; 

export default {
  name: 'app',
  data () {
    return {
      months: []
    }
  },

  mounted () {
    this.fetchMonths();
    console.log(this.months)
  },

  methods: {
    fetchMonths () {
      axios
        .get('http://localhost:3001/api/v1/month-form')
        .then(response => { 
            this.months = response.data;
            })
        .catch(error => { this.errors.push(error) })
    }
  }
}
</script>

<style src="./styles/app.css">
</style>
