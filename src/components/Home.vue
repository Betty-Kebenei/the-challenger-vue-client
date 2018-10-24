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
          <ul  v-for="month in paginatedData">
            <li :key="month._id"  v-on:click="fetchMonthDetails(month)">
                <i><strong>FROM:</strong><span>{{ month.fromDate | moment("MMM Do") }}</span></i>
                <i><strong>TO:</strong><span>{{ month.toDate | moment("MMM Do") }}</span></i>
                <br />
                <br />
                <font-awesome-icon icon="edit"/>
                <font-awesome-icon icon="trash"/>
            </li>
          </ul>
      </div>

      <br />

      <div>
        <button 
          class="pagination-button" 
          @click="prevPage"
          :disabled="pageNumber==0"
          >
          &laquo;
        </button>
        <button 
          class="pagination-button" 
          v-for="i in pageCount"
          @click="pageNumber = i"
          >
          {{i + 1}}
        </button>
        <button 
          class="pagination-button" 
          @click="nextPage"
          :disabled="pageNumber >= pageCount -1"
          >
          &raquo;
        </button>
      </div>

      <div v-if="months.length < 1">
          <p>{{error}}</p>
      </div>

    </div>
    <main v-if="showCharts">
      <view-month :month="month" />
    </main>
  </div>
</template>

<script>
import axiosInstance from "../axiosInstance.js";
import { EventBus } from "../event-bus.js";
import ViewAMonth from "./ViewAMonth";
import MonthForm from "./MonthForm";

export default {
  name: 'home',
  data () {
    return {
      months: [],
      month: {},
      showMonthForm: false,
      error: '',
      showCharts: false,
      pageNumber: 0,
      size: 5,
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

  computed: {
    pageCount(){
      let len = this.months.length,
          size = this.size;
      return Math.floor(len/size);
    },

    paginatedData(){
      const start = this.pageNumber * this.size,
            end = start + this.size;
      return this.months.slice(start, end);
    }
  },

  methods: {
    fetchMonthDetails(month) {
      this.month = month;
      this.showCharts = true;
    }, 

    fetchMonths () {
      axiosInstance
        .get('http://localhost:3001/api/v1/month-form')
        .then(response => { 
            if(response.data.length > 0) {
                this.months = response.data;
                this.months.length > 0 && this.fetchMonthDetails(response.data[0]);
            } else if(response.data.message){
                this.error = response.data.message;
            } else {
                this.$snack.danger('You are experiencing errors! Please contact the admin.');
            }
            })
        .catch((error) => { })
    },

    nextPage(){
         this.pageNumber++;
    },

    prevPage(){
      this.pageNumber--;
    },

  }
}
</script>

<style src="../styles/home.css">
</style>
