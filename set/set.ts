let myset: Set<number> = new Set<number>(); // Create a new Set of numbers
myset.add(29); // Add the number 29 to the set
myset.add(67); 
myset.add(90); 

console.log(myset); // Print the set
console.log(myset.has(29)); // Check if the set contains the number 29
console.log(myset.size); // Print the number of elements in the set
myset.delete(29);
console.log(myset.has(29))// false 
console.log(myset.clear());
// map in typescript 
let mymap:Map< number, string> = new Map<number, string>();
mymap.set(1,"a")
mymap.set(2,"b");
mymap.set(3,"c");
mymap.set(4,"d")
console.log(mymap)
console.log(mymap.has(1))// return true of data 
console.log(mymap.delete(1))// delete the key and data also 
console.log(mymap.clear())// delete all item in the  MAP
console.log(mymap.get(2))//  return the valuse of key