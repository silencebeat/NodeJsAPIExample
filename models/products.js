var db=require('../dbconnection');

var Products={

    getAllProduct:function(callback){
        return db.query("Select * from product",callback);
    },
    getProductById:function(id,callback){
        return db.query("select * from product where id=?",[id],callback);
    },
    addProduct:function(Product,callback){
        return db.query("Insert into product(name, price) values(?,?)",[Product.name, Product.price],callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from product where Id=?",[id],callback);
    },
    updateProduct:function(id,Product,callback){
        return  db.query("update product set name=?,price=? where Id=?",[Product.name,Product.price,id],callback);
    },
    deleteAll:function(item,callback){
        return db.query("delete from product",[],callback);
    }
};
module.exports=Products;