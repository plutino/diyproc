var express = require('express');
var routes = require('require-dir')();

module.exports = function(app) {
  Object.keys(routes).forEach(function(routeName) {
    var router = express.Router();
    require('./' + routeName)(router);
    app.use(`/api/${settings.api_version}/${routeName}`, router);
  });
};