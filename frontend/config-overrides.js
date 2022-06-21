const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = {
  webpack: function (config, env) {
    config.plugins = [
      ...config.plugins,
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new NodePolyfillPlugin(),
    ];
    // TODO: use other ways to resolve error
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin)
    );

    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};
