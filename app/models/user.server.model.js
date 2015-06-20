var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName : String,
  email    : String,
  username : String,
  password : String
});

mongoose.model('User', UserSchema);