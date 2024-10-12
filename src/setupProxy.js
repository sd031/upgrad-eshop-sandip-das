const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dev-project-ecommerce.upgrad.dev", //http://localhost:8080
      changeOrigin: true,
    }),
  );
};
