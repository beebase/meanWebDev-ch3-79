exports.render = function(req, res) {
  // add lastVisit to session object
  if (req.session.lastVisit) {
    console.log('\nLAST VISIT: ' + req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

  res.render('index', {
    title       : 'Hello World',
    userFullName: req.user ? req.user.fullName : '',
    user        : JSON.stringify(req.user)
  });
};