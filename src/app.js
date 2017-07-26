import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/routes'
import { sync } from 'vuex-router-sync'

export function createApp () {
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
