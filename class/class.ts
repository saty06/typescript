// there are 3 type class public privat protected 
// public 
class Animal{
    public nameData:String
    constructor(nameData:string){
        this.nameData = nameData
    }
    public speck():void{
        console.log(`${this.nameData} is speck`)
    }
}
let dog= new Animal('Dog')
console.log(dog.nameData)//  public is provid to acces data outside the class
/// private
class Animal1{
    private nameData:string;
    constructor(nameData:string){
        this.nameData = nameData
    } 
    public speek():void{
        console.log(`${this.nameData} is a private data `)

    }
}
let dog1 = new Animal1("Elephant")
dog1.speek()
/// if i try to acces out side class data i got error 
// console.log(dog1.nameData);
// protected
class Animal3{
    protected nameData:string
    constructor(nameData:string){
        this.nameData = nameData

    }
    public speek():void{
        console.log(`${this.nameData} this is protected class data `)
    }
}
class Dog2 extends Animal1{
    constructor(nameData:string){
        super(nameData)
    }
}
let cat = new Dog2("cat")
cat.speek();