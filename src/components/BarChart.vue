<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      color: ['deepskyblue', 'lightgray']
    }
  },
  props: {
    chartData: Array,
  },
  computed: {
    datasets: function () {
      return this.chartData.map(({ name, value }, i) => ({
        label: name,
        data: [ value ],
        backgroundColor: this.color[i],
      }))
    },
    total: function () {
      return this.chartData.reduce((a, { value }) => a + value, 0)
    },
  },
  mounted() {
    // TODO: support SSR
    new Chart(this.$refs.canvas, {
      type: 'horizontalBar',
      data: {
        datasets: this.datasets,
        labels: [''],
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [{ ticks: { max: this.total }, stacked: true, display: false, gridLines: {display: false} } ],
          yAxes: [{ stacked: true, display: false, gridLines: {display: false} } ]
        },
        maintainAspectRatio: false,
        responsive: false,
        // Disable due to low resolution
        tooltips: { enabled: false }
      },
    })
  }
}
</script>

<style scoped>
canvas {
  width: 260px;
  height: 30px;
  position: relative;
}
</style>
