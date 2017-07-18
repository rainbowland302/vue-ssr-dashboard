import { createApp } from './main'
const { app, router } = createApp()

// onReady: use async component in router
router.onReady(() => {
  app.$mount('#app')
})
