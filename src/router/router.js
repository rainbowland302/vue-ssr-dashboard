import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'Hello',
//     component: Hello
//   }]
// })

// Return a new instance insteads
Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'Hello', component: Hello }
    ]
  })
}
