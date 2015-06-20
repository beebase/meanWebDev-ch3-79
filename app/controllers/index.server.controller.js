exports.render = function(req, res) {
  // add lastVisit to session object
  if (req.session.lastVisit) {
    console.log('\nLAST VISIT: ' + req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

  res.render('index', {
    title       : 'Hello Worldsss',
    userFullName: req.user ? req.user.fullName : ''
  })
};
