let function1:(a:number, b:number)=>any=(a,b):any => {
    return a+b

}
let function2= function1(2,5)
console.log(function2)
/// regular function 
function abcd( a:number, b:number):number{
return (a+b)*28;
}
console.log(abcd(2,5))
// use array in function ()
function arrayFun(arg:number[]): any{
    let data:number[] = []
    for(let i =0; i<arg.length; i++){
        data.push(arg[i]*29)
    }
    return data

}
console.log(arrayFun([1,2,3,3,4,45,5]));
 let fun = function ():any {
    console.log("Hello bro ")

 }
 console.log(fun())
