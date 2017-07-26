<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      color: ['green', 'deepskyblue']
    }
  },
  props: {
    chartData: Array,
    chartLabel: Array
  },
  computed: {
    datasets: function () {
      return this.chartData.map(({ name, value }, i) => ({
        label: name,
        data: value,
        backgroundColor: this.color[i],
        borderColor: this.color[i],
        fill: false,
      }))
    }
  },
  mounted() {
    // TODO: support SSR
    new Chart(this.$refs.canvas, {
      type: 'line',
      data: {
        datasets: this.datasets,
        labels: this.chartLabel
      },
      options: {}
    })
  }
}
</script>

<style scoped>

</style>
