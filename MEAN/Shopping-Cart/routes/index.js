var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shops/index.hbs', { title: 'Shopping Cart' });
});

module.exports = router;
