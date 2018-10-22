<template>
    <div>
        <h1>
            <u>
                {{ month.fromDate | moment("MMM Do") }} 
               <i>TO</i>
                {{ month.toDate | moment("MMM Do")}}
            </u>
        </h1>
        
        <div class="tabs-component">
            <tabs class="tabs-component-tabs">
                <tab class="tabs-component-tab" name="Add Daily Data">
                    <daily-data-form :month="month"/>
                </tab>
                <tab class="tabs-component-tab" name="Charts">
                    <section v-if="draw">
                        <bar-chart
                            :dailies="dailies"
                        />
                        <line-graph
                            :dailies="dailies"
                        />
                    </section>
                </tab>
                <tab class="tabs-component-tab" name="Tables">
                    <section v-if="draw">
                        <faithfulness-table
                            :month="month"
                            :dailies="dailies"
                        />
                    </section>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
import axiosInstance from "../axiosInstance.js"; 
import BarChart from "./BarChart.vue";
import LineGraph from "./LineGraph.vue";
import FaithfulnessTable from "./FaithfulnessTable.vue";
import DailyDataForm from "./DailyDataForm";

export default {
    name: 'viewAMonth',
    components: {
        'daily-data-form': DailyDataForm,
        'bar-chart': BarChart, 
        'line-graph': LineGraph,
        'faithfulness-table': FaithfulnessTable
    },

    data () {
        return {
        showDailyForm: false,
        dailies: [],
        morningChapters: [],
        otherChapters: [],
        riserTime: [],
        dates: [],
        notes: [],
        prayer: [],
        smr: [],
        draw: false,
        }
    },
    props: {
        month: Object,
    },

    mounted() {
        this.fetchDailyData(this.month._id);
    },

    methods: {
      fetchDailyData(monthId) {
        axiosInstance
        .get(`http://localhost:3001/api/v1/month-form/${monthId}/daily-data`)
        .then(response => {
            response.data.map(data => {
                this.dates.push(data.riserTime.split('T')[0]);
                this.morningChapters.push(data.chaptersMorning);
                this.otherChapters.push(data.chaptersOthers);
                this.riserTime.push(data.riserTime.split('T')[1]);
                this.notes.push(data.notes);
                this.prayer.push(data.prayer);
                this.smr.push(data.smr);
                this.draw = true;
            });
            this.dailies.push(
                this.dates,
                this.morningChapters,
                this.otherChapters,
                this.riserTime,
                this.notes,
                this.prayer,
                this.smr
                ); 
        })
        .catch(() => {})
    }

  }
}
</script>

<style scoped src="../styles/viewAMonth.css">
</style>
