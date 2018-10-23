<template>
    <div>
        <h1>Pie Charts</h1>

        <h2>Notes Pie Chart</h2>
        <canvas id="notes-pie-chart" height="80px"></canvas>

        <h2>Prayer Pie Chart</h2>
        <canvas id="prayer-pie-chart" height="80px"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'notesPie',
    props: {
      dailies: Array
    },

    mounted() {
        this.createPieChart('notes-pie-chart', this.dailies[4]);
        this.createPieChart('prayer-pie-chart', this.dailies[5]);
        this.createPieChart('notes-pie-chart', this.dailies[4]);
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
                        data: [trueCount, falseCount]
                    }],
                    labels: [
                        trueCount + ' Wroten notes',
                        falseCount + ' Didn"t write notes',
                    ],
                },
          });
      },
  }
}
</script>
