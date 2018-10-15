<template>
    <form @submit.prevent="postDailyData(month)" >
        <h1> Daily Data Form </h1>
        <div class="row">
            <div class="col-label">
                <label for="morning-chapters">Chapters Read (Morning)</label>
            </div>
            <div class="col-input">
                <input type="number" id="morning-chapters" v-model="morningChapters" />
            </div>
        </div>
        <div class="row">
            <div class="col-label">
                <label for="other-chapters">Chapters Read (Others)</label>
            </div>
            <div class="col-input">
                <input type="number" id="other-chapters" v-model="otherChapters" />
            </div>
        </div>
        <div class="row">
            <div class="col-label">
                <label for="riser-time">Riser Time</label>
            </div>
            <div class="col-input">
                <input type="date-time" id="riser-time" v-model="riserTime" />
            </div>
        </div>
        <div class="row">    
            <fieldset>
                <div class="col-label">
                    <legend>Notes</legend> 
                </div>
                <div class="col-input">
                    <label class="choice">
                        <input type="radio" v-model="notes" value="yes"/>
                        Yes
                    </label><br>
                    <label class="choice">
                        <input type="radio" v-model="notes" value="no"/>
                        No
                    </label> <br>
                </div>
            </fieldset>
        </div>
        <div class="row">
            <fieldset>
                <div class="col-label">
                    <legend>Prayer</legend> 
                </div>
                <div class="col-input">
                    <label class="choice">
                        <input type="radio" v-model="prayer" value="yes"/>
                        Yes
                    </label><br>
                    <label class="choice">
                        <input type="radio" v-model="prayer" value="no"/>
                        No
                    </label> <br>
                </div>
            </fieldset>
        </div>
        <div class="row">
            <fieldset>
                <div class="col-label">
                    <legend>SMR</legend> 
                </div>
                <div class="col-input">
                    <label class="choice">
                        <input type="radio" v-model="smr" value="yes"/>
                        Yes
                    </label><br>
                    <label class="choice">
                        <input type="radio" v-model="smr" value="no"/>
                        No
                    </label> <br>
                    </div>
            </fieldset>
        </div>
        <input type="submit" value="Submit" />
        <input type="button" value="Cancel" @click="showDailyForm = false" />
    </form>
</template>

<script>
import axios from "axios";
export default {
    name: 'dailyDataForm',
    data () {
        return {
            morningChapters: 0,
            otherChapters: 0,
            riserTime: '',
            notes: false,
            prayer: false,
            smr: false,
        }
    },
    
    props: {
        month: String,
    },
    
    methods: {
      postDailyData(monthId) {
        axios
        .post(`http://localhost:3001/api/v1/month-form/${monthId}/daily-data`,
        { 
            morningChapters: this.morningChapters,
            otherChapters: this.otherChapters,
            riserTime: this.riserTime,
            notes: this.notes,
            prayer: this.prayer,
            smr: this.smr
        })
        .then((response) => {
            this.$snack.success('Daily data Successfully added!');
        })
        .catch(error => { 
            this.$snack.danger(error.response.data);
         })
      },
    }
}
</script>

<style scoped src="../styles/dailyDataForm.css">
</style>
