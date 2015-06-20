process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// import configurations
var mongooseConfig = require('./config/mongoose');
var expressConfig = require('./config/express');
var passportConfig = require('./config/passport');

// execute configurations
var db = mongooseConfig();
var app = expressConfig();
var passport = passportConfig();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');