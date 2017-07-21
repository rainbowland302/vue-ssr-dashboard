import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // use `asyncData()` for matching route
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // Expose the state on the render context
        // Allows the client-side store to pick-up state without having to duplicate fetching.
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
