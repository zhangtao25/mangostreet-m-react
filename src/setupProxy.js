const proxy = require('http-proxy-middleware');
const os = require('os');
// 获取本地id
function getIPAdress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
const port = "8080"
const myHost = getIPAdress();
// const myHost = "192.168.0.110";

module.exports = function(app) {
  app.use(
      proxy(
          '/api',
          {
            target: `http://${myHost}:${port}`,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
              "^/api": "/"
            },
          })
  );
};
