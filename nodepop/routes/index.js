var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //El title lo tenemos definido como variable local en el app.js
  res.render('index');
});

module.exports = router;
