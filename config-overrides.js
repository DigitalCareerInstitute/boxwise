/**
 * This function overrides the default webpack.config file
 * provided by react-create-app.
 * It will be called by react-app-rewired.
 * @param {object} config
 * @param {"production"|"development"} env
 * @returns {object}
 */
module.exports = function override(config, env) {
  if (env === 'development') {
    config.devtool = "source-map";
  }
  return config;
};