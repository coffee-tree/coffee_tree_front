const createProxyMiddleware = require('http-proxy-middleware')
module.exports = (app:any) => {
  app.use(
    createProxyMiddleware(
      ['/api', '/container-status'],
      {
        target: 'http://13.125.252.52:8080',
        changeOrigin: true,
        ws: true,
        router: {
          '/container-status': 'ws://13.125.252.52:8080'
        }
      }
    )
  )
}