const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const webpack = require("webpack")

const release = require("./package.json").version;
// Export app version (VUE_APP_* env exports only)
process.env.VUE_APP_VERSION = release;

const port = process.env.PORT || 8080;
const public = process.env.HTTP_HOST || undefined;
const publicPath = process.env.PUBLIC_URL || "./";
const host = "0.0.0.0";
const proxy = "http://0.0.0.0:" + (process.env.API_PORT || 3200);
const production = process.env.production || process.env.NODE_ENV === "production";

console.log(`Vue CLI building UGamela Client in version: ${release}`);
console.log(`Host: ${public || "localhost"}:${port} - publicPath: "${publicPath}"`);

const plugins = [
  new VuetifyLoaderPlugin(), // for custom dynamic imports see https://vuetifyjs.com/en/customization/a-la-carte#custom-dynamic-imports
];

if (!production) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  console.log("Proxy through to mock API at", proxy);
}

module.exports = {
  configureWebpack: {
    plugins,
  },
  publicPath,
  devServer: {
    proxy,
    host,
    hot: !production,
    public,
    port,
    overlay: true,
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
