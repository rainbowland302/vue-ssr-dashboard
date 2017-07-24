import * as types from './mutation-types'

export default {
  [types.FETCH_OVERALL](state, payload) {
    state.overall = payload;
  },
  [types.FETCH_TEAM](state, payload) {
    state.team = payload;
  },
  [types.FETCH_TREND](state, {reqExpect, reqReal}) {
    state.trend = { reqExpect, reqReal }
  }
}
