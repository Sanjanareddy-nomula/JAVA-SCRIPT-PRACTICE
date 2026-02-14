var array1=[10,21,30,40,50]
var arr=[10,20,30,44,43]
let array2=array1.concat([100,300])
let array3=array1.copyWithin()//copies as same as array1
let array4=array1.entries()//index values 
for (let item of array4) {
    console.log(item);}

var res=array1.every(num=>num%2==0)//evry means evry element must satisfy condition
{
    console.log(res);
}
var ress=array1.some(num=>num%2==1)//some means some element must satisfy condition

{
    console.log(ress)
}
var res=array1.fill(0)//fills 0 
console.log(res)
var res1=arr.filter(num=>num%2==0)//based on condition filters
console.log(res1)
var res2=arr.find(num=>num==11)//finds
console.log(res2)
var res3=arr.findIndex(num=>num==10)
console.log(res3)
var res4=arr.findLast(num=>num%2==0)//last ele that satdifsy the condiotn
console.log(res4)
Arr3=[1,2,[3,4,[4,5],[5,6]]]
var res5=Arr3.flat(3)
console.log(res5)
let arr7=[1,2,3,4,5]
var res6=arr7.toString()
console.log(typeof(res6))
var res7=arr7.push(10,20)
console.log(res7)
var res8=arr7.pop()
console.log(res8)