<template>
    <div style="width:80%;">
        <form @submit.prevent="postDailyData(month._id)" >
            <h1> Daily Data Form </h1>
            <div class="row">
                <div class="col-label">
                    <label 
                        for="morning-chapters" 
                        class="required-field">
                        Chapters Read (Morning)
                    </label>
                </div>
                <div class="col-input">
                    <input 
                        type="number" 
                        id="morning-chapters"
                        v-model="morningChapters"
                        min=0
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label 
                        for="other-chapters" 
                        class="required-field">
                        Chapters Read (Others)
                    </label>
                </div>
                <div class="col-input">
                    <input 
                        type="number" 
                        id="other-chapters" 
                        v-model="otherChapters" 
                        min=0
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label 
                        for="riser-time" 
                        class="required-field">
                        Riser Time
                    </label>
                </div>
                <div class="col-input">
                    <input 
                        type="datetime-local" 
                        id="riser-time" 
                        v-model="riserTime"
                        required
                    />
                </div>
            </div>
            <div class="row">    
                <fieldset>
                    <div class="col-label">
                        <legend 
                            class="required-field">
                            Notes
                        </legend> 
                    </div>
                    <div class="col-input">
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="notes" 
                                value="yes"/>
                            Yes
                        </label><br>
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="notes" 
                                value="no"/>
                            No
                        </label> <br>
                    </div>
                </fieldset>
            </div>
            <div class="row">
                <fieldset>
                    <div class="col-label">
                        <legend 
                            class="required-field">
                            Prayer
                        </legend> 
                    </div>
                    <div class="col-input">
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="prayer" 
                                value="yes"/>
                            Yes
                        </label><br>
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="prayer" 
                                value="no"/>
                            No
                        </label> <br>
                    </div>
                </fieldset>
            </div>
            <div class="row">
                <fieldset>
                    <div class="col-label">
                        <legend 
                            class="required-field">
                            SMR
                        </legend> 
                    </div>
                    <div class="col-input">
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="smr" 
                                value="yes"/>
                            Yes
                        </label><br>
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="smr" 
                                value="no"/>
                            No
                        </label> <br>
                        </div>
                </fieldset>
            </div>
            <div class="row">
                <fieldset>
                    <div class="col-label">
                        <legend 
                            class="required-field">
                            Is this today's data?
                        </legend> 
                    </div>
                    <div class="col-input">
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="validity" 
                                value="yes"/>
                            Yes
                        </label><br>
                        <label class="choice">
                            <input 
                                type="radio" 
                                v-model="validity" 
                                value="no"/>
                            No
                        </label> <br>
                        </div>
                </fieldset>
            </div>
            <input 
                type="submit" 
                value="Submit" />
            <input 
                type="button" 
                value="Cancel" 
                @click="showDailyForm = false" />
        </form>
    </div>
</template>

<script>
import axiosInstance from "../axiosInstance.js";

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
            validity: false
        }
    },
    
    props: {
        month: Object,
    },

    methods: {
      postDailyData(monthId) {
        axiosInstance
        .post(`http://localhost:3001/api/v1/month-form/${monthId}/daily-data`,
        { 
            chaptersMorning: this.morningChapters,
            chaptersOthers: this.otherChapters,
            riserTime: this.riserTime,
            notes: this.notes,
            prayer: this.prayer,
            smr: this.smr,
            dataValid: this.validity,
        })
        .then((response) => {
            this.$snack.success(response.data.message);
            this.morningChapters = 0;
            this.otherChapters = 0;
            this.riserTime = '';
            this.notes = false;
            this.prayer = false;
            this.smr = false;
            this.validity = false;
            EventBus.$emit("add-daily-data", response.data.daily);
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
