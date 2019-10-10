const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// via https://medium.com/@tommedema/hot-module-reloading-with-create-react-app-v3-f2c7afe1dae8

module.exports = function override(config, env) {
    config = rewireReactHotLoader(config, env);

    config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom'
    }

  return config;
}