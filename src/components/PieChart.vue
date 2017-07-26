<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      color: ['green', 'deepskyblue', 'lightgray']
    }
  },
  props: {
    chartData: Array,
  },
  computed: {
    datasets: function () {
      return [{
        data: this.chartData.map(a => a.value),
        backgroundColor: this.color
      }]
    }
  },
  mounted() {
    // TODO: support SSR
    var myDoughnutChart = new Chart(this.$refs.canvas, {
      type: 'pie',
      data: {
        datasets: this.datasets,
        labels: this.chartData.map(a => a.name)
      },
      options: {}
    })
  }
}
</script>

<style scoped>

</style>
