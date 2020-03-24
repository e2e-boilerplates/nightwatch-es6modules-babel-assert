/* eslint-disable-next-line global-require,import/no-extraneous-dependencies */
require("@babel/register");

<<<<<<< HEAD
module.exports = (settings => {
=======
module.exports = ((settings) => {
>>>>>>> 9d36f393bd5275837eda6cd5fb31d872dd8767d0
  // eslint-disable-next-line no-param-reassign
  settings.test_workers = false;
  return settings;
})(require("./nightwatch.js"));
