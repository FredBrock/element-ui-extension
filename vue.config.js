
const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    entry: '/playground/main.js',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'playground'),
      }
    }
  }
});
