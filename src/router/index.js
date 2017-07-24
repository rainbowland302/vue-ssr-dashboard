import Vue from 'vue'
// import Home from '../components/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('../components/Home.vue') }
  ]
})

export default router
