/* eslint-disable */

const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { useBabelRc, override } = require('customize-cra');

// via https://medium.com/@tommedema/hot-module-reloading-with-create-react-app-v3-f2c7afe1dae8

function setHotLoader(config, env) {
  config = rewireReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom'
  };

  return config;
}

module.exports = override(
  useBabelRc(),
  setHotLoader
);
