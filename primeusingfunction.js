function prime(a){
    var c=0;
    for(let i=1;i<=a;i++)
    {
        if (a%i==0){
            c=c+1;
        }
    }
    if(c==2){
        return true
    }
    else{
        return false
    }}
console.log(prime(5))
