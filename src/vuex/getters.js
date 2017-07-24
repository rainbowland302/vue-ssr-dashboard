/*
  lineData: [
    { name: 'Trend', value: [2, 3, 4] },
    { name: 'Forecast', value: [1, 2, 3] }
  ],
  lineLabel: ['6/25', '7/2', '7/9']
*/
export const lineLabel = ({ trend: { reqExpect } }) => reqExpect.map(obj => obj.name)
export const lineData = ({ trend: { reqExpect, reqReal } }) => [
  { name: 'Trend', value: reqReal.map(obj => obj.value) },
  { name: 'Forecast', value: reqExpect.map(obj => obj.value) }
]

// pieData: [{ name: 'Onboard', value: 10 }, { name: 'Offered', value: 10 }, { name: 'Opened Reqs', value: 20 }]
export const pieData = ({ overall: { status: { offered, onboard, open } } }) => [
  { name: 'Onboard', value: onboard },
  { name: 'Offered', value: offered },
  { name: 'Opened Reqs', value: open }
]
