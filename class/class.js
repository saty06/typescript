var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// there are 3 type class public privat protected 
// public 
var Animal = /** @class */ (function () {
    function Animal(nameData) {
        this.nameData = nameData;
    }
    Animal.prototype.speck = function () {
        console.log("".concat(this.nameData, " is speck"));
    };
    return Animal;
}());
var dog = new Animal('Dog');
console.log(dog.nameData); //  public is provid to acces data outside the class
/// private
var Animal1 = /** @class */ (function () {
    function Animal1(nameData) {
        this.nameData = nameData;
    }
    Animal1.prototype.speek = function () {
        console.log("".concat(this.nameData, " is a private data "));
    };
    return Animal1;
}());
var dog1 = new Animal1("Elephant");
dog1.speek();
/// if i try to acces out side class data i got error 
// console.log(dog1.nameData);
// protected
var Animal3 = /** @class */ (function () {
    function Animal3(nameData) {
        this.nameData = nameData;
    }
    Animal3.prototype.speek = function () {
        console.log("".concat(this.nameData, " this is protected class data "));
    };
    return Animal3;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(nameData) {
        return _super.call(this, nameData) || this;
    }
    return Dog2;
}(Animal1));
var cat = new Dog2("cat");
cat.speek();
