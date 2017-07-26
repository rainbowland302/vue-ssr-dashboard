<template>
  <div class="page-wrapper">
    <div class="pie-wrapper">
      <pie-chart :chart-data="pieData"></pie-chart>
    </div>
    <div class="line-wrapper">
      <line-chart :chart-data="lineData" :chart-label="lineLabel"></line-chart>
    </div>
    <div class="table-wrapper">
      <standard-table
        :table-header="tableHeader | notInclude(['name']) | product(product)"
        :table-content="overallHighlight">
      </standard-table>
    </div>
    <div class="bars-wrapper">
      <div class="bar-wrapper" v-for="(barData, index) in barGroup">
        <div class="text-wrapper">
          <span class="bar-title">{{teamDetails[index].name}}</span>
          <span class="bar-value">{{`${teamDetails[index].filled}/${teamDetails[index].total}`}}</span>
        </div>
        <bar-chart :chart-data="barData"></bar-chart>
      </div>
    </div>
    <div class="table-wrapper">
      <standard-table
        :table-header="tableHeader | notInclude(['ttf']) | product(product)"
        :table-content="teamDetails">
      </standard-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import PieChart from './PieChart.vue'
import LineChart from './LineChart.vue'
import StandardTable from './StandardTable.vue'
import BarChart from './BarChart.vue'

export default {
  components: { PieChart, LineChart, StandardTable, BarChart },
  data() {
    return {
      tableHeader: [
        { key: 'name', value: 'Team' },
        { key: 'ttf', value: 'TTF' },
        { key: 'total', value: 'Total Reqs' },
        { key: 'cv', value: 'Resume Uploaded' },
        { key: 'resume', value: 'Resume Screened' },
        { key: 'phone', value: 'Phone Screened' },
        { key: 'onsite', value: 'TP/Onsite Interviewed' },
        { key: 'onsitePoolAugust', value: 'Onsites For August'},
        { key: 'reject', value: 'Failed' },
        { key: 'offered', value: 'Offered' },
        { key: 'onboard', value: 'Onboard' }
      ],
    }
  },
  filters: {
    notInclude: (values, args) => values.filter( ({key}) => args.indexOf(key) < 0 ),
    product: (values, arg) => arg === 'isilon' ? values : values.filter( ({key}) => key !== 'onsitePoolAugust' )
  },
  computed: {
    ...mapGetters([
      'pieData',
      'lineData',
      'lineLabel',
      'barGroup'
    ]),
    ...mapState({
      teamDetails: 'team',
      overall: 'overall'
    }),
    overallHighlight: state => [ state.overall.highlight],
    // TODO: why cannot directly get the route here
    product() {
      return this.$store.state.route.params.product
    }
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

.bar-wrapper {
  width: 33%;
  display: inline-block;
}

.text-wrapper {
  width: 260px;
}

.bar-value {
  float: right;
}

</style>
