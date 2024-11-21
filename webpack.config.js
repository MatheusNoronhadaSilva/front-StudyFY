const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "net": false, // Desabilita o módulo net
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false, // Ou use um polyfill específico se necessário
      "stream": require.resolve("stream-browserify")
    }
  }
};
