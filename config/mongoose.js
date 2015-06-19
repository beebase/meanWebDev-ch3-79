var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connnect(config.db);
  return db;
};