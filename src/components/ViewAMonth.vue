<template>
    <div>
        <h1>CHARTS, TABLES AND MORE</h1>
        <p>
            <i><strong>FROM:</strong><span>{{ month.fromDate | moment("MMM Do") }}</span></i>
            <i><strong>TO:</strong><span>{{ month.toDate | moment("MMM Do") }}</span></i>
        </p>

        <div class="tabs-component">
            <ul class="tabs-component-tabs">
                <li class="tabs-component-tab form"  @click="openTab('form')">
                    Add Daily Data
                </li>
                <li class="tabs-component-tab charts" @click="openTab('charts')">
                    Charts
                </li>
                <li class="tabs-component-tab tables" @click="openTab('tables')">
                    Tables
                </li>
            </ul>
        </div>
        <div id="form" class="tabs-contents">
            <daily-data-form :month="month"/>
        </div>
        <div id="charts" class="tabs-contents">
            <section v-if="!draw" class="no-daily-data">
                <p>This tab is supposed to show visual representation of my daily record but I don't have any daily data yet to visualize.</p>
                <p>I should add daily data using the <strong>Daily Data Form</strong> in the <strong>Add Daily Data tab</strong> to get started.</p>
            </section>
            <section v-if="draw">
                <bar-chart
                    :dailies="dailies"
                />
                <line-graph
                    :dailies="dailies"
                />
                <pie-charts
                    :dailies="dailies"
                />
            </section>
        </div>
        <div id="tables" class="tabs-contents">
            <section>
                <percentage-table />

                <detailed-table v-if="draw"
                    :dailydata="dailyData"
                />
            </section>
        </div>
    </div>
</template>

<script>
import axiosInstance from "../axiosInstance.js"; 
import BarChart from "./BarChart.vue";
import LineGraph from "./LineGraph.vue";
import PercentageTable from "./PercentageTable.vue";
import DailyDataForm from "./DailyDataForm";
import DetailedTable from "./DetailedTable";
import PieCharts from "./PieCharts";

export default {
    name: 'viewAMonth',
    components: {
        'daily-data-form': DailyDataForm,
        'bar-chart': BarChart, 
        'line-graph': LineGraph,
        'percentage-table': PercentageTable,
        'detailed-table': DetailedTable,
        'pie-charts': PieCharts,
    },

    data () {
        return {
        showDailyForm: false,
        dailyData: [],
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
        this.openTab('form');
    },

    methods: {
      fetchDailyData(monthId) {
        axiosInstance
        .get(`http://localhost:3001/api/v1/month-form/${monthId}/daily-data`)
        .then(response => {
            this.dailyData = response.data;
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
    },

    openTab(tabContent){
        let i;
        let x = document.getElementsByClassName("tabs-contents");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        let selected = document.getElementsByClassName("tabs-component-tab");
        for (i = 0; i < selected.length; i++) {
            selected[i].classList.remove("selected");
        }
        document.getElementById(tabContent).style.display = "block"; 
        document.getElementsByClassName(tabContent)[0].classList.add("selected");
    }

  }
}
</script>

<style scoped src="../styles/viewAMonth.css">
</style>
