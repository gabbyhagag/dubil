const path = require('path')
const {
    override,
    disableEsLint,
    overrideDevServer,
    watchAll,
    addLessLoader,
    getBabelLoader,
    addWebpackModuleRule,
    fixBabelImports,
    addWebpackPlugin,
    babelInclude
  }  = require("customize-cra");
  const WebpackBar = require('webpackbar')

  
  module.exports = function (config, env) {
    const babelLoader = getBabelLoader(config)

    return Object.assign(
      config,
      override(
        /* Make sure Babel compiles the stuff in the common folder */
        babelInclude([
          path.resolve('src'), // don't forget this
          path.resolve('.storybook'), // don't forget this
        ]),
        addLessLoader({
          lessOptions: {
          javascriptEnabled: true,
        }
      }),  
      addWebpackModuleRule({
        test: /\.mdx?$/,
        use: [
          { loader: babelLoader.loader, options: babelLoader.options },
          '@mdx-js/loader',
        ],
      }),
        addWebpackPlugin(new WebpackBar())
      )(config, env)
    )  
  };
