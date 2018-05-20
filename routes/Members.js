var express = require('express');
var router = express.Router();
var Members=require('../models/member');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

        Members.getMemberById(req.params.id,function(err,rows){

            if(err)
            {
                res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
            }
            else{
                res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
            }
        });

    }
    else{

        Members.getAllMember(function(err,rows){

            if(err)
            {
                res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
            }
            else{
                res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
            }

        });
    }
});
router.post('/add/',function(req,res,next){

    Members.addMember(req.body,function(err,count){

        if(err)
        {
            res.send(JSON.stringify({"status": 500, "error": err, "message": "Insert data failed"}));
        }
        else{
            res.send(JSON.stringify({"status": 200, "error": null, "message": "Data added"}));
        }
    });
});

router.delete('/delete/:id',function(req,res,next){

    Members.deleteMember(req.params.id,function(err,count){

        if(err)
        {
            res.send(JSON.stringify({"status": 500, "error": err, "message": "Cannot delete data"}));
        }
        else
        {
            res.send(JSON.stringify({"status": 200, "error": null, "message": "Data deleted"}));
        }

    });
});
router.put('/update/:id',function(req,res,next){

    Members.updateMember(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.send(JSON.stringify({"status": 500, "error": err, "message": "Update data failed"}));
        }
        else{
            res.send(JSON.stringify({"status": 200, "error": null, "message": "Data updated"}));
        }
    });
});
module.exports=router;