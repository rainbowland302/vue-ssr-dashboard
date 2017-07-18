import { createApp } from './main'

// (context: {url}): Promise => {}
export default context => {
  // return promise in server render (async component)
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    // config vue router in server side render
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      resolve(app)
    }, reject)
  })
}
