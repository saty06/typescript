// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example,
//  if the input is 4 then your function 
//  should return 10 because 1 + 2 + 3 + 4 = 10.
let num: (a: number, b: number, c: number, d: number) => number = (a, b, c, d): number => {
    return a + b + c + d
}
// console.log(num(1, 2, 3, 4))
// 2=> Create a function that returns a base - 2(binary) representation of a base - 10(decimal) string number.To convert is simple:
//  ((2) means base - 2 and(10) means base - 10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of
// the most right bit is 1, now from that every bit to the left will be x2 the 
// value, value of an 8 bit binary numbers are(256, 128, 64, 32, 16, 8, 4, 2, 1).
let binaryNumber:(a:number)=>any = (a):any =>{
let res:number[] = []
if(a==0 || a<0){
    return " number is not valid"
}
else{
    while(a>=1){
        let demy = a%2;
        res.push(demy)
        a = Math.floor(a/2)
    }
    
}
return res;

}
let resultdata = binaryNumber(15)
if(resultdata=="number is not valid"){
    console.log("sorry")
}
else{
    for(let i =resultdata.left-1; i>=0; i--){
        console.log(resultdata[i],"  ");
    }
}
// Write a function that takes a two-digit number and determines
// if it's the largest of two possible digit swaps.
let larNumber:(a:number)=>boolean=(a):boolean=>{
   let number:number = a
   let result = 0
    while(result>0){
         let  data = a%10
          result = (result*10)+data;
          a= Math.floor(a/10)
    }
    if(result>a){
       return true
    }
    return false

}
console.log(larNumber(72))
// Create a function that takes an array of numbers and return both 
// the minimum and maximum numbers, in that order.
let arrayfunction:(a:number[])=>any  = (a):any=>{
    let result:any = []
    if(a.length==1){
        let min = a[0]
        result.push(min)
        let max = a[0]
        result.push(a[0])
    }
    else{
        for(let i =0; i<a.length-1; i++){
            for(let j =0; j<a.length-i-1; j++){
                if(a[j]>a[j+1]){
                    let temp = a[j];
                    a[j] = a[j+1]
                    a[j+1] = temp
                }
            }
        }

        let min =a[0]
        result.push(min)
        let max = a[a.length-1]
          result.push(max)
          return result;
    }
   
}
console.log(arrayfunction([2,1,3,45,0]))
