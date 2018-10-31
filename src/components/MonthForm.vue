<template>
    <form @submit.prevent="editing ? UpdateAMonth(month._id) : postMonth() ">
        <h1> Month Form </h1>
        <div class="row">
            <div class="col-label">
                <label for="from-date">From Date</label>
            </div>
            <div class="col-input">
                <input type="date" id="from-date" v-model="fromDate" />
            </div>
        </div>
        <div class="row">
            <div class="col-label">
                <label for="to-date">To Date</label>
            </div>
            <div class="col-input">
                <input
                    type="text"
                    id="to-date"
                    disabled
                    v-model="toDate" />
            </div>
        </div>
        <div class="submit-month-form">
            <input type="submit" :value="editing ? 'Edit' : 'Add New' " />
        </div>
    </form>  
</template>

<script>
import axiosInstance from "../axiosInstance.js";
import { EventBus } from "../event-bus.js"; 

export default {
  name: 'monthForm',
  data () {
      return {
          fromDate: '',
          toDate: ''
      }
  },

  props: {
      month: Object,
      editing: Boolean
  },

  mounted(){
      if(this.editing){
          this.fromDate = this.month.fromDate;
          this.toDate = this.month.toDate;
      }
  },

  watch: {
      fromDate() {
        var date = new Date(this.fromDate);
        var newdate = new Date(date);

        newdate.setDate(newdate.getDate() + 27);
        
        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var y = newdate.getFullYear();

        var someFormattedDate = mm + '/' + dd + '/' + y;
        this.toDate = someFormattedDate;    
      }
  },

  methods: {
      postMonth() {
          axiosInstance
          .post('http://localhost:3001/api/v1/month-form', {
              fromDate: this.fromDate,
              toDate: this.toDate
          })
          .then((response) => {
              this.$snack.success(response.data.message);
              EventBus.$emit("added-form", response.data.month);
              })
          .catch((error) => {
              this.$snack.danger(error.response.data);
          })
      },

      UpdateAMonth(monthId) {
        axiosInstance
            .put(`http://localhost:3001/api/v1/month-form/${monthId}`, {
                fromDate: this.fromDate,
                toDate: this.toDate
            })
            .then(response => { 
                EventBus.$emit("update-form");
                this.$snack.success(response.data.message);
            })
                .catch((error) => {
                this.$snack.danger(error.response.data);
            })
        },
  }
}
</script>

<style scoped src="../styles/monthForm.css">
</style>
