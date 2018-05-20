var express = require('express');
var router = express.Router();
var order=require('../models/orders');

router.post('/',function(req,res,next){

    res.end(order.processData(req.body));
});

module.exports=router;