"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api": {
        target: "https://movie.douban.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/img9": {
        target: "https://img9.doubanio.com/view/photo/s_ratio_poster/public",
        changeOrigin: true,
        pathRewrite: {
          "^/img9": ""
        }
      },
      "/img2": {
        target: "https://img2.doubanio.com/view/photo/s_ratio_poster/public",
        changeOrigin: true,
        pathRewrite: {
          "^/img2": ""
        }
      },
      "/img1": {
        target: "https://img1.doubanio.com/view/photo/s_ratio_poster/public",
        changeOrigin: true,
        pathRewrite: {
          "^/img1": ""
        }
      },
      "/img3": {
        target: "https://img3.doubanio.com/view/photo/s_ratio_poster/public",
        changeOrigin: true,
        pathRewrite: {
          "^/img3": ""
        },

        "/dianying": {
          target: "https://www.iqiyi.com/dianying_new",
          changeOrigin: true,
          pathRewrite: {
            "^/dianying": ""
          },

          "qileyun":{
            target: " http://jk.qileyun.cn",
            changeOrigin: true,
            pathRewrite: {
              "^/qileyun": ""
          }
        }
      }
    },
    // proxyTable: {},

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
