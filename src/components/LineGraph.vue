<template>
    <div>
        <h1>Early Riser Line Graph</h1>
        <canvas id="line-chart" height="80px"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'lineGraph',
    props: {
      month: String,
      time: Array,
    },

    mounted() {
        this.createLineGraph('line-chart', this.time);
        console.log(this.time)
    },

    methods: {
      createLineGraph(chartId, risertime){
            const ctx = document.getElementById(chartId);
            const barChart = new Chart(ctx , {
                type: 'line',
                data: {
                    labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5'],
                    datasets: [
                        {
                            data: risertime,
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
                        
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            type: 'time',
                            distribution: 'series'
                        }]
                    }
                }
          });
      },
  }
}
</script>
