var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Dashboard', menuId:'dash'});
});

module.exports = router;
