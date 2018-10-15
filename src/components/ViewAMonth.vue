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
                :month="month"
                :mchapters="morningChapters"
                :ochapters="otherChapters"
            />
            <line-graph
                :month="month"
                :time="riserTime"
            />
            <faithfulness-table
                :month="month"
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
        morningChapters: [],
        otherChapters: [],
        riserTime: [],
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
                this.morningChapters.push(data.chaptersMorning);
                this.otherChapters.push(data.chaptersOthers);
                this.riserTime.push(data.riserTime);
                this.draw = true;
            });
        })
        .catch(() => {})
    }

  }
}
</script>

<style scoped src="../styles/viewAMonth.css">
</style>
