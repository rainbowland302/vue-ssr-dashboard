import axios from 'axios'
import * as types from './mutation-types'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export const fetchData = ({ commit, state }) => {
  return axios.all([fetchUrl('isilon', 'overview'), fetchUrl('isilon', 'team'), fetchUrl('isilon', 'trend')])
    .then(axios.spread((overall, team, trend) => {
      commit(types.FETCH_OVERALL, overall.data)
      commit(types.FETCH_TEAM, team.data)
      commit(types.FETCH_TREND, trend.data)
    })).catch((error) => {
      console.log(error)
    })
}

const fetchUrl = (route, param) => axios.get(`${route}/${param}`)
