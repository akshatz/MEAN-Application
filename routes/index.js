var express = require('express');
var router = express.Router();
var Product = require('../models/product') ;
var csrf = require('csurf');

var  csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	var products = Product.find(function(err,docs){
		var productChunks = [];
		var chunkSize = 3;
		for (var i = 0; i < docs.length; i+= chunkSize){
			productChunks.push(docs.slice(i, i+chunkSize));
		}
		res.render('shops/index', { title: 'Shopping Cart', products: productChunks});
	});
});	

router.get('/user/signup', function(req, res, next) {
	res.render('user/signup', {title:'Login',csrfToken:req.csrfToken()})
});

router.post('/user/signup', function(req, res, next){
	res.redirect('/',{title:'Shopping Page'})
});

module.exports = router;
