var products = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping',{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});

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