function maximum(arr){
    var max1=0;
    for (let i in arr){
        if(arr[i]>max1){
            max1=arr[i];
        }
    }
    return max1
}
console.log(maximum([10,20,40,10]))