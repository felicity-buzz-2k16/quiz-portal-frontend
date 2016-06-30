module.exports = {
  "output": {
    // Temporary hack till webpack-dev-server starts suppoprting historyApiFallback with publicPath
    // See https://github.com/webpack/webpack-dev-server/pull/518
    "publicPath": (process.env.NODE_ENV == 'production' && process.env.PUBLIC_PATH) || '/',
  }
}
