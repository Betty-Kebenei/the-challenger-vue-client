<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>
    <div class="leftNav">
      <ul  v-for="month in months">
        <li 
          :key="month._id">
          {{ month.fromDate | moment("MMMM Do YYYY") }}
          <strong>to</strong>
          {{ month.toDate | moment("MMMM Do YYYY") }}
          </li>
      </ul>
    </div>
    <main>
      <view-month />
    </main>
  </div>
</template>

<script>
import axios from "axios"; 
import ViewAMonth from "./components/ViewAMonth";

export default {
  name: 'app',
  data () {
    return {
      months: []
    }
  },

  components: {
    'view-month': ViewAMonth,
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
