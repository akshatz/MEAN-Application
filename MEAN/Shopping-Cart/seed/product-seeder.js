var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('127.0.0.1:27017/shopping',{ useNewUrlParser:true});

var products = [];

var done =0;

for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit()
        }
    });
}

function exit(){
    mongoose.disconnect();
}