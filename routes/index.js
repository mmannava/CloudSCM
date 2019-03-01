var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Dashboard', menuId:'dash', scm_avg:'193.27', scm_low:'164.43', scm_high:'243.56', scm_std:'2.89', scm_cov:'0.01', cor:'56.29', for_:'34.24', baseline_scm:'193.5'});
});

module.exports = router;
