<template>
    <div>
        <h1>Reading Speed Bar Chart</h1>
        <canvas id="bar-chart" height="80px"></canvas>
    </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js';

export default {
    name: 'viewAMonth',
    data () {
      return {
        }
    },

    props: {
      month: String,
      mchapters: Array,
      ochapters: Array
    },

    mounted() {
        this.createBarChart('bar-chart', this.mchapters, this.ochapters);
    },

    methods: {
      createBarChart(chartId, morningChapters, otherChapters){
            const ctx = document.getElementById(chartId);
            const barChart = new Chart(ctx , {
                type: 'bar',
                data: {
                    labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5'],
                    datasets: [
                        {
                            label: 'Number of chapter read in the morning.',
                            data: morningChapters,
                            backgroundColor: [
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                            ],
                            borderColor: [
                                '#36495d',
                                '#36495d',
                                '#36495d',
                                '#36495d'
                            ],
                        },
                        {
                            label: 'Number of chapter read other time in the day.',
                            data: otherChapters,
                            backgroundColor: [
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                                'rgba(54,73,93,.5)',
                            ],
                            borderColor: [
                                '#36495d',
                                '#36495d',
                                '#36495d',
                                '#36495d'
                            ],
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