import axios from 'axios'
import * as types from './mutation-types'

axios.defaults.baseURL = `http://${process.env.HOST}:${process.env.PORT}/api/`
const fetchUrl = (route, param) => axios.get(`${route}/${param}`)

export const fetchData = ({ commit, state }, product) => {
  return axios.all([fetchUrl(product, 'overview'), fetchUrl(product, 'team'), fetchUrl(product, 'trend')])
    .then(axios.spread((overall, team, trend) => {
      commit(types.FETCH_OVERALL, overall.data)
      commit(types.FETCH_TEAM, team.data)
      commit(types.FETCH_TREND, trend.data)
    })).catch((error) => {
      console.log(error)
    })
}
