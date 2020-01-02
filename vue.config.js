const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const release = require("./package.json").version;
// Export app version (VUE_APP_* env exports only)
process.env.VUE_APP_VERSION = release;

const port = process.env.PORT || 8080;
const public = process.env.HTTP_HOST || undefined;
const publicPath = process.env.PUBLIC_URL || "./";
const host = "0.0.0.0";
const proxy = 'http://0.0.0.0:'+(process.env.API_PORT || 3200);

console.log(`Vue CLI building UGamela Client in version: ${release}`);
console.log(`Host: ${public || "localhost"}:${port} - publicPath: "${publicPath}"`);

module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin(), // for custom dynamic imports see https://vuetifyjs.com/en/customization/a-la-carte#custom-dynamic-imports
    ],
  },
  publicPath,
  devServer: {
    proxy,
    disableHostCheck: true, // behind nginx proxy this is allowed
    host,
    hot: true,
    // inline: false,
    public,
    port,
    overlay: true,
    /*
    // Access & extend builtin express server:
    before(app) {
       app.get("/some-route", (req, res) => {
        res.set("Content-Type", "text/html");
        const { code } = req.query;
        res.send(`
          <body onload="window.top.postMessage('success-code=${code}', '${publicPath}');">
          Success
          </body>
        `);
      });
    },
    */
  },
  chainWebpack: config => {
    /*config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      });*/
  },
};
