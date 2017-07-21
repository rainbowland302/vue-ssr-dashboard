<template>
  <div class="page-wrapper">
    <div class="pie-wrapper">
      <pie-chart :chart-data="pieData"></pie-chart>
    </div>
    <div class="line-wrapper">
      <line-chart :chart-data="lineData" :chart-label="lineLabel"></line-chart>
    </div>
    <div class="table-wrapper">
      <standard-table :table-header="tableHeader" :table-content="tableContent"></standard-table>
    </div>
  </div>
</template>
<script>
import PieChart from './PieChart.vue'
import LineChart from './LineChart.vue'
import StandardTable from './StandardTable.vue'
export default {
  components: { PieChart, LineChart, StandardTable },
  data() {
    return {
      pieData: [{ name: 'Onboard', value: 10 }, { name: 'Offered', value: 10 }, { name: 'Opened Reqs', value: 20 }],
      lineData: [
        { name: 'Trend', value: [2, 3, 4] },
        { name: 'Forecast', value: [1, 2, 3] }
      ],
      lineLabel: ['6/25', '7/2', '7/9'],
      tableHeader: [{key: 'team', value: 'Team'}, {key: 'open', value: 'Open'}],
      tableContent: [{team: 'EAT', open: '10'}, {team: 'DEV', open: '15'}]
    }
  }
}
</script>
<style scoped>
.pie-wrapper {
  width: 300px;
  display: inline-block;
}
.line-wrapper {
  width: 600px;
  display: inline-block;
}
</style>
