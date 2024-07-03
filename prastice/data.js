 
 
 var a = 2// true  
 
  let  number = [1,2,3,34,55]
  console.log(number.join('$'))
  console.log( typeof String(number))
 console.log(a)
let a1 = Number(a)
console.log(typeof a1)
 {
    var  dsta2 = 38
 }
 let b =  true// 1 // like data  number 
 console.log(dsta2)
 a>=b? console.log("yes"):console.log("not ");
 switch(a){
    case 1:console.log(1)
    break;
    default:console.log("default case")
    break;
    case 2:console.log(2)
    break;
    
 }
let ob = {
   name:"satya", id:23, address:"nerull", id:57
}
for(key in ob){
   console.log(ob[key])
}
//   for(let i =1; i<=3; i++){
//    setTimeout(()=>console.log(i), 2000)
//   }
  console.log(!!"heelo ")
console.log(ob.class?" yes ":" now")
function data1(){
   console.log("asbajbd")
}
/// this is  the extra property of thuis method 
data1();
console.log(ob)
/// string array and es5 to es10
let  dub = [2,3,3,4,4,5,2,2,2,3,3,4,4,4,4,4,4,5]
let res = new Set(dub)
console.log(res)
let stringData = "hello "
for(let i =0; i<stringData.length; i++){
   console.log(stringData[i])
}
console.log(stringData.charAt(0));
console.log(stringData.charCodeAt(0))
let finddata = [2,3,4,4,5]
console.log(finddata.every((index)=>index>2))
let res2 = [...dub,[...finddata]]
console.log(res2)