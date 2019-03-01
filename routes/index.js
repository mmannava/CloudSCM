var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Service Capability Measure (SCM)', menuId:'dash', scm_data: ['193.27', '164.43', '243.56', '2.89', '0.01'] , cor:'56.29', for_:'34.24', baseline_scm:'193.5'});
});

module.exports = router;
