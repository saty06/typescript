"use strict";
// defin the string 
let stringData = "hello ";
console.log(stringData);
// number data 
let numberData = 47;
console.log(numberData);
// boolen 
let boolenData = true;
console.log(boolenData);
//  object
let objectData = {
    name: String,
    id: Number
};
objectData = {
    name: "satya", id: 23
};
console.log(objectData);
// if i have no idea for data type then use any
let datatypeData = "hello data ";
console.log(datatypeData);
datatypeData = 456;
console.log(datatypeData);
datatypeData = null;
console.log(datatypeData);
datatypeData = true;
console.log(datatypeData);
// array 
let arrayData = ['a', 'b', 'c'];
console.log(arrayData);
let arrayNumber = [1, 2, 3, 4, 5, 5, 6, 7, 8, 99];
console.log(arrayNumber);
let object1 = {
    name: String, age: Number
};
object1 = {
    name: "satya prakash singh", age: 24
};
console.log(object1);
// out of scop  if i want try to acces other data which is not in object , it is provid  error 
//console.log(" error data becouse id is not valid ",object1.id)
// enum data type  
var day;
(function (day) {
    day["SUN"] = "SUN";
    day["MON"] = "MON";
    day["TUS"] = "TUS";
})(day || (day = {}));
let dayData = day.MON;
let dayByday = "SUN";
if (dayData === dayByday) {
    console.log("data is match");
}
else {
    console.log("not match data ");
}
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);