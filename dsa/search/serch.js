var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// linear search 
var linData = [1, 2, 4, 2, 6, 7];
var key = 30;
var linearFunction = function (linData, key) {
    var data = __spreadArray([], linData, true);
    for (var i = 0; i < data.length; i++) {
        if (data[i] === key) {
            return true;
        }
    }
    return false;
};
//console.log(linearFunction(linData, key));
// binary  search data 
var binaryData = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // the data in  assendind or dissending from  
var key2 = 14;
function binaryFunction(binaryData, key) {
    var start = 0;
    var arrayData = __spreadArray([], binaryData, true);
    var end = binaryData.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (arrayData[mid] == key) {
            return mid;
        }
        else if (arrayData[mid] > key) {
            end = mid - 1;
        }
        else if (arrayData[mid] < key) {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binaryFunction(binaryData, key2));
