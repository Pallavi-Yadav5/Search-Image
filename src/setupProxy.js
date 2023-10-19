const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://api.unsplash.com', // Replace with the API route you want to proxy
    createProxyMiddleware({
      target: 'https://api.unsplash.com', // The target API URL
      changeOrigin: true,
    })
  );
};
