// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// Use Factory instead of singleton
export function createApp () {
  const router = createRouter()
  const app = new Vue({
    // inject router into Vue root instance
    router,
    render: h => h(App)
  })
  return { app, router }
}
