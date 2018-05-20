var Number ={

    getSumFibo:function(maxNumber){

        var sum = 0;

        for (var i = 0; i <= maxNumber ; i++) {
            if (f(i)<=maxNumber){
                var num = f(i);
                if (checkPrime(num)){
                    console.log(num);
                    sum += num;
                }
            }else{
                break;
            }
        }
        return ''+sum;
    }

};

function f(n){
    if (n <=1 ){
        return n;
    }else{
        return f(n-1) + f(n-2);
    }
}

function checkPrime(n){
    if (n < 2) {
        return false;
    }
    for (var i = 2; 2*i <n ; i++) {
        if (n%i === 0){
            return false;
        }
    }
    return true;
}


module.exports=Number;