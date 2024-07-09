var function1 = function (a, b) {
    return a + b;
};
var function2 = function1(2, 5);
console.log(function2);
/// regular function 
function abcd(a, b) {
    return (a + b) * 28;
}
console.log(abcd(2, 5));
// use array in function ()
function arrayFun(arg) {
    var data = [];
    for (var i = 0; i < arg.length; i++) {
        data.push(arg[i] * 29);
    }
    return data;
}
console.log(arrayFun([1, 2, 3, 3, 4, 45, 5]));
var fun = function () {
    console.log("Hello bro ");
};
console.log(fun());
