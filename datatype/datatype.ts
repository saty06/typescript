// defin the string 
let stringData :string = "hello "
console.log(stringData)
// number data 
let  numberData :number=47
console.log(numberData);
// boolen 
let boolenData:boolean = true
console.log(boolenData);
//  object
let objectData:object={
    name:String,
    id:Number

}
   objectData={
    name:"satya", id:23
}
console.log(objectData)
// if i have no idea for data type then use any
let datatypeData :any = "hello data "
console.log(datatypeData)
datatypeData = 456
console.log(datatypeData)
datatypeData = null
console.log(datatypeData)
datatypeData = true
console.log(datatypeData)
// array 
let arrayData:string[] =['a','b','c']; 
console.log(arrayData)
let arrayNumber:number[] =[1,2,3,4,5,5,6,7,8,99];
console.log(arrayNumber);
let object1:object ={
   name:String, age:Number
} 
object1={
    name:"satya prakash singh", age:24
}
console.log(object1)
// out of scop  if i want try to acces other data which is not in object , it is provid  error 
//console.log(" error data becouse id is not valid ",object1.id)
// enum data type  
enum day {
     SUN ="SUN", MON="MON", TUS="TUS"
}
let dayData:day= day.MON
let dayByday :string= "SUN"
if(dayData===dayByday){
    console.log("data is match")
}
else{
    console.log("not match data ")
}
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
// if u  do not assign the data type it take by itself 
let a = true;
///  it is a boolen data do not assign any other data 
//a= 6;// error 
let nulldata: null =null;
// string is  used like array
let stringArray:string[] = []
stringArray.push("hello ")
// do  not fill  number 
//stringArray.push(8)=> error 
let numberArray:number[] =[]
numberArray.push(2)
// do not fill any other data 
//  touple data 
let tupleData : [string, number] 
// it is take only two data 1 is string and 2 is number do not change it 
tupleData = ["hello ", 3]
console.log(tupleData)
tupleData = ["data", 8]
console.log(tupleData)
// distructuring of tuple 
let tupledis:[string, number ] = ["hello ", 5]
const[x, y ] = tupledis
console.log(x, y)
let objectdis: object= {
   name:String,
   id:Number
}
objectdis = {
    name : " satring data ",
    id:67
}
//  union  dataa type
function data(data:string|number):void{
  
  console.log('data TO CHECDK ',  data)
if(typeof data=='number'){
    console.log(data)
}


}
data("hhgh");
data(6)

// function  regular function 
 function data3(a:number,b:number):void{
    console.log(`data one ${a}=> data two => ${b}`)

 }
 data3(2,5);
 // array function 
let regularFunction:(a:number, b:number)=>number =(a,b):number=> {
   return a+b

 }
 console.log(regularFunction)
 /// use as 
 let asData:unknown =7
 let asnum: number = (asData as string).length;
 console.log(asnum) 