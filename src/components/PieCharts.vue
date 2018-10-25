<template>
    <div style="width:80%;">
        <h1>Pie Charts</h1>
        <div class="row">
            <div class="col">
                <h2>Notes (Written?)</h2>
                <canvas id="notes-pie-chart" height="80px"></canvas>
            </div>
            <div class="col">
                <h2>Prayer (Prayed?)</h2>
                <canvas id="prayer-pie-chart" height="80px"></canvas>
            </div>
            <div class="col">
                <h2>Scripture Memory Recitation (Recited?)</h2>
                <canvas id="smr-pie-chart" height="80px"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'pieChart',
    props: {
      dailies: Array
    },

    mounted() {
        this.createPieChart('notes-pie-chart', this.dailies[4]);
        this.createPieChart('prayer-pie-chart', this.dailies[5]);
        this.createPieChart('smr-pie-chart', this.dailies[6]);
    },

    methods: {
      createPieChart(chartId, dailyData){
            const ctx = document.getElementById(chartId);

            let x;
            let trueCount = 0;
            let falseCount = 0;

            dailyData.map(data => {
                if(data === true){
                    trueCount = trueCount + 1
                }
            });

            falseCount = dailyData.length - trueCount;

            const notesPieChart = new Chart(ctx , {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [trueCount, falseCount],
                        backgroundColor: ['green', 'orange']
                    }],
                    labels: [
                        trueCount + ' Yes',
                        falseCount + ' No',
                    ],
                },
          });
      },
  }
}
</script>

<style scoped src="../styles/pieCharts.css">
</style>
