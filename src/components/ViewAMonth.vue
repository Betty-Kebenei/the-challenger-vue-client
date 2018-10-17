<template>
    <div>
        <h1>Details for {{ month.fromDate }} to {{ month.toDate }} month form </h1>
        <button class="daily-data-button" @click="showDailyForm = !showDailyForm">Add Daily Data</button>
        <section v-show="showDailyForm">
            <daily-data-form :month="month"/>
        </section>
        <section v-if="draw">
            <h1>CHARTS AND TABLES</H1>
            <bar-chart
                :dailies="dailies"
            />
            <line-graph
                :dailies="dailies"
            />
            <faithfulness-table
                :month="month"
                :dailies="dailies"
            />
        </section>
    </div>
</template>

<script>
import axios from "axios"; 
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
        axios
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
