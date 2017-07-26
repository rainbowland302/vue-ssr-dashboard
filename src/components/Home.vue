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
import { mapState, mapGetters } from 'vuex'

import PieChart from './PieChart.vue'
import LineChart from './LineChart.vue'
import StandardTable from './StandardTable.vue'

export default {
  components: { PieChart, LineChart, StandardTable },
  data() {
    return {
      tableHeader: [
        { key: 'name', value: 'Team' },
        { key: 'total', value: 'Total Reqs' },
        { key: 'cv', value: 'Resume Uploaded' },
        { key: 'resume', value: 'Resume Screened' },
        { key: 'phone', value: 'Phone Screened' },
        { key: 'onsite', value: 'TP/Onsite Interviewed' },
        { key: 'reject', value: 'Failed' },
        { key: 'offered', value: 'Offered' },
        { key: 'onboard', value: 'Onboard' }
      ],
    }
  },
  computed: {
    ...mapGetters([
      'pieData',
      'lineData',
      'lineLabel',
    ]),
    ...mapState({
      tableContent: 'team'
    })
  },
  asyncData({ store, route }) {
    return store.dispatch('fetchData', route.params.product)
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
