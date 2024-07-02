// defin the string 
var stringData = "hello ";
console.log(stringData);
// number data 
var numberData = 47;
console.log(numberData);
// boolen 
var boolenData = true;
console.log(boolenData);
//  object
var objectData = {
    name: String,
    id: Number
};
objectData = {
    name: "satya", id: 23
};
console.log(objectData);
// if i have no idea for data type then use any
var datatypeData = "hello data ";
console.log(datatypeData);
datatypeData = 456;
console.log(datatypeData);
datatypeData = null;
console.log(datatypeData);
datatypeData = true;
console.log(datatypeData);
// array 
var arrayData = ['a', 'b', 'c'];
console.log(arrayData);
var arrayNumber = [1, 2, 3, 4, 5, 5, 6, 7, 8, 99];
console.log(arrayNumber);
var object1 = {
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
var dayData = day.MON;
var dayByday = "SUN";
if (dayData === dayByday) {
    console.log("data is match");
}
else {
    console.log("not match data ");
}
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
// if u  do not assign the data type it take by itself 
var a = true;
///  it is a boolen data do not assign any other data 
//a= 6;// error 
var nulldata = null;
// string is  used like array
var stringArray = [];
stringArray.push("hello ");
// do  not fill  number 
//stringArray.push(8)=> error 
var numberArray = [];
numberArray.push(2);
// do not fill any other data 
//  touple data 
var tupleData;
// it is take only two data 1 is string and 2 is number do not change it 
tupleData = ["hello ", 3];
console.log(tupleData);
tupleData = ["data", 8];
console.log(tupleData);
// distructuring of tuple 
var tupledis = ["hello ", 5];
var x = tupledis[0], y = tupledis[1];
console.log(x, y);
var objectdis = {
    name: String,
    id: Number
};
objectdis = {
    name: " satring data ",
    id: 67
};
//  union  dataa type
function data(data) {
    console.log('data TO CHECDK ', data);
    if (typeof data == 'number') {
        console.log(data);
    }
}
data("hhgh");
data(6);
// function  regular function 
function data3(a, b) {
    console.log("data one ".concat(a, "=> data two => ").concat(b));
}
data3(2, 5);
// array function 
var regularFunction = function (a, b) {
    return a + b;
};
console.log(regularFunction);
/// use as 
var asData = 7;
var asnum = asData.length;
console.log(asnum);
