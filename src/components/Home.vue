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
                <font-awesome-icon icon="edit" />
                <font-awesome-icon icon="trash" @click="deleteAMonth(month._id)"/>
            </li>
          </ul>
      </div>

      <br />

      <div v-if="months.length > 5">
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

    <main v-if="months.length < 1">
        <h1>So, what next?</h1>
        <p>You can add <strong>28 days month forms</strong> to get started.</p>

        <h2>Intructions</h2>
        <ul>
          <li>Click on the <i><b>Add Month Form</b></i> button.</li>
          <li>Enter the <b>From Date</b>.</li>
          <li>The <b>To Date</b> will be automcatically generated for you.</li>
          <li>Click submit button to complete submission.</li>
        </ul>

        <p><strong>NOTE:</strong> Once you add a month form, you can add data daily to keep track of you daily performance in CBR.</p>
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


    deleteAMonth(monthId) {
      axiosInstance
        .delete(`http://localhost:3001/api/v1/month-form/${monthId}`)
        .then(response => { 
          this.$snack.success(response.data.message);
        })
        .catch((error) => {
          this.$snack.danger(error.response.data);
         })
    },


  }
}
</script>

<style scoped src="../styles/home.css">
</style>
