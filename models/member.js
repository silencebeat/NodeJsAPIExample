var db=require('../dbconnection');

var Member={

    getAllMember:function(callback){

        return db.query("Select * from member",callback);

    },
    getMemberById:function(id,callback){

        return db.query("select * from member where id=?",[id],callback);
    },
    addMember:function(member,callback){
        console.log(member.name);
        return db.query("Insert into member(Name, Phone, Address) values(?,?,?)",[member.name, member.phone, member.address],callback);
    },
    deleteMember:function(id,callback){
        return db.query("delete from member where Id=?",[id],callback);
    },
    updateMember:function(id,member,callback){
        console.log(member.name)
        console.log(id)
        return  db.query("update member set Name=?,Phone=?, Address=? where Id=?",[member.name,member.phone, member.address,id],callback);
    },
    deleteAll:function(item,callback){

        var delarr=[];
        for(i=0;i<item.length;i++){

            delarr[i]=item[i].id;
        }
        return db.query("delete from member where Id in (?)",[delarr],callback);
    }
};
module.exports=Member;