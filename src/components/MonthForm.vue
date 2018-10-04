<template>
    <form @submit.prevent="postMonth">
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
                <input type="date" id="to-date" v-model="toDate" />
            </div>
        </div>
        <input type="submit" value="Submit" />
    </form>
</template>

<script>
import axios from "axios"; 

export default {
  name: 'monthForm',
  data () {
      return {
          fromDate: '',
          toDate: ''
      }
  },

  methods: {
      postMonth() {
          axios
          .post('http://localhost:3001/api/v1/month-form', {
              fromDate: this.fromDate,
              toDate: this.toDate
          })
          .then(() => {})
          .catch(() => {})
      }
  }
}
</script>

<style scoped src="../styles/monthForm.css">
</style>
