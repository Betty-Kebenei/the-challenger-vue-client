<template>
    <div>
        <h1>Notes Pie Chart</h1>
        <canvas id="pie-chart" height="80px"></canvas>
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
        this.createNotesPieChart('pie-chart', this.dailies[4]);
    },

    methods: {
      createNotesPieChart(chartId, dailyData){
            const ctx = document.getElementById(chartId);

            let x;
            let trueCount = 0;
            let falseCount = 0;

            for(x=0; x<dailyData.length; x++) {
                trueCount = trueCount + 1
            }

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
