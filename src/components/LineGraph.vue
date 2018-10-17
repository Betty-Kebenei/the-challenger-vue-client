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
      dailies: Array,
    },

    mounted() {
        this.createLineGraph('line-chart', this.dailies);
    },

    methods: {
      createLineGraph(chartId, dailyData){
            const ctx = document.getElementById(chartId);
            const barChart = new Chart(ctx , {
                type: 'line',
                data: {
                    labels: dailyData[0],
                    datasets: [
                        {
                            label: 'Early riser line graph.',
                            data: dailyData[3],
                            backgroundColor: 'transparent',
                            pointBorderColor: 'blue',
                            pointStyle: 'rectRounded',
                            pointBackgroundColor: 'blue',
                            borderColor: 'orange',
                        },
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            type: 'time',
                            time: {
                                parser: 'h:mm',
                                max: '7:0',
                                min: '4:0',
                                unitStepSize: .25,
                            }
                        }]
                    }
                }
          });
      },
  }
}
</script>
