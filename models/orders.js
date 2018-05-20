var Product=require('../models/products');

var Order = {

    processData:function(data){
        console.log(data);
        var name = data.name;
        var pesanan = data.pesanan;
        var total = 0;
        var harga;
        var jumlah;

        for (var i = 0; i <pesanan.length ; i++) {
            harga = pesanan[i].harga;
            jumlah = pesanan[i].jumlah;
            total += hitung(harga, jumlah);
        }
        return detail(name, total, pesanan);

    }
};

function hitung(harga, jumlah){
    return harga * jumlah;
}

function detail(name,total, list){
    return JSON.stringify({"nama": name, "total harga": total, "data": list})
}

module.exports=Order;