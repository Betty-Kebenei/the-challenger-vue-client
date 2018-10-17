<template>
    <div>
        <h1>Reading Speed Bar Chart</h1>
        <canvas id="bar-chart" height="80px"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'barChart',
    props: {
      dailies: Array
    },

    mounted() {
        this.createBarChart('bar-chart', this.dailies);
    },

    methods: {
      createBarChart(chartId, dailyData){
            const ctx = document.getElementById(chartId);
            const barChart = new Chart(ctx , {
                type: 'bar',
                data: {
                    labels: dailyData[0],
                    datasets: [
                        {
                            label: 'Number of chapter read in the morning.',
                            data: dailyData[1],
                            backgroundColor: 'rgba(0,0,255, .7)', 
                        },
                        {
                            label: 'Number of chapter read other time in the day.',
                            data: dailyData[2],
                            backgroundColor: 'rgba(54,73,93,.5)',
                        } 
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true,
                            padding: 25,
                            }
                        }]
                    }
                }
          });
      },
  }
}
</script>

<style scoped src="../styles/barChart.css">
</style>
