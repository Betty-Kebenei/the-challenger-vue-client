<template>
  <div>
    <div class="leftNav">
    <button
        @click="showMonthForm = !showMonthForm"
    >Add Month Form</button>
    <div v-show="showMonthForm">
        <month-form :months="months"/>
    </div>
    <div v-if="months.length > 0">
        <h1>Months</h1>
        <ul  v-for="month in months">
        <li :key="month._id"  v-on:click="fetchId(month._id)">
            {{ month.fromDate | moment("MMM Do") }}
            <strong>to</strong>
            {{ month.toDate | moment("MMM Do") }}
        </li>
        </ul>
    </div>
    <div v-if="months.length < 1">
        <p>{{error}}</p>
    </div>
    </div>
    <main v-if="showCharts">
     <view-month :month="monthId" />
    </main>
  </div>
</template>

<script>
import axios from "axios"; 
import { EventBus } from "../event-bus.js";
import ViewAMonth from "./ViewAMonth";
import MonthForm from "./MonthForm";

export default {
  name: 'home',
  data () {
    return {
      months: [],
      monthId: '',
      showMonthForm: false,
      error: ''
    }
  },

  components: {
    'view-month': ViewAMonth,
    'month-form': MonthForm,
  },

  created(){
      EventBus.$on("added-form", month => {
      this.months.push(month);
      this.showMonthForm = false;
    });
  },

  mounted () {
    this.fetchMonths();
  },

  methods: {
    fetchId(monthId) {
      this.monthId = monthId;
      this.showCharts = true;
    }, 

    fetchMonths () {
      axios
        .get('http://localhost:3001/api/v1/month-form')
        .then(response => { 
            if(response.data.length > 0) {
                this.months = response.data;
                this.months.length > 0 && this.fetchId(response.data[0]._id);
            } else if(response.data.message){
                this.error = response.data.message;
            } else {
                this.$snack.danger('You are experiencing errors! Please contact the admin.');
            }
            })
        .catch((error) => { })
    },
  }
}
</script>

<style src="../styles/home.css">
</style>
