var express = require('express');
var router = express.Router();
var fibo=require('../models/fibonaccis');

router.get('/:id',function(req,res,next){

    res.end('hasil penjumlahan bilangan fibonacci yang merupakan bilangan prima: '+fibo.getSumFibo(req.params.id));
});

module.exports=router;