<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>
    <div class="leftNav">
      <button
        @click="showMonthForm = !showMonthForm"
      >Add Month Form</button>
      <div v-show="showMonthForm">
        <month-form />
      </div>
      <div>
        <h1>Months</h1>
        <ul  v-for="month in months">
          <li :key="month._id"  v-on:click="fetchId(month._id)">
            {{ month.fromDate | moment("MMM Do") }}
            <strong>to</strong>
            {{ month.toDate | moment("MMM Do") }}
          </li>
        </ul>
      </div>
    </div>
    <main v-if="monthId">
      <view-month :monthId="monthId" />
    </main>
  </div>
</template>

<script>
import axios from "axios"; 
import ViewAMonth from "./components/ViewAMonth";
import MonthForm from "./components/MonthForm";

export default {
  name: 'app',
  data () {
    return {
      months: [],
      monthId: '',
      showMonthForm: false
    }
  },

  components: {
    'view-month': ViewAMonth,
    'month-form': MonthForm
  },

  mounted () {
    this.fetchMonths();
  },

  methods: {
    fetchId(monthId) {
      this.monthId = monthId;
    }, 

    fetchMonths () {
      axios
        .get('http://localhost:3001/api/v1/month-form')
        .then(response => { 
            this.months = response.data;
            })
        .catch(error => { this.errors.push(error) })
    },
  }
}
</script>

<style src="./styles/app.css">
</style>
