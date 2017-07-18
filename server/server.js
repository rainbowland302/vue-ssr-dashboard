const Vue = require('vue')
const server = require('express')()
const { createRenderer, createBundleRenderer } = require('vue-server-renderer')

// path to built-server-bundle
// const createApp = require('../src/entry-server') // bundle will automatically generate the app
const template = require('fs').readFileSync('./index.html', 'utf-8')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

// const renderer = createRenderer({
//   template: require('fs').readFileSync('../index.html', 'utf-8')
// })
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }

  // return a promise in entry-server
  // createApp(context).then(app => { renderer.renderToString(app, (err, html) => { }) })

  // bundle will automatically generate the app
  // decouple the server with app
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})
server.listen(8080)
