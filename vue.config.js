const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin(), // for custom dynamic imports see https://vuetifyjs.com/en/customization/a-la-carte#custom-dynamic-imports
    ],
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
