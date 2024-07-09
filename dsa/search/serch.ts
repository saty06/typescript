// linear search 
let  linData:number[] = [1,2,4,2,6,7]
let key:number = 30;
let linearFunction :(linData:number[], key:number)=>boolean =(linData, key):any=>{
    let data:number[] = [...linData]
    for(let i= 0; i<data.length; i++){
        if(data[i]===key){
            return true
        }
    }
    return false

} 
//console.log(linearFunction(linData, key));

// binary  search data 
let binaryData:number[] = [1,2,3,4,5,6,7,8,9]// the data in  assendind or dissending from  
let key2:number  = 14;
function binaryFunction(binaryData:number[], key:number):any{
    let start:number= 0;
    let arrayData:number[] = [...binaryData]
    let end:number =   binaryData.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if( arrayData[mid]==key){
            return mid
        }
        else if( arrayData[mid]>key){
            end = mid-1

        }
        else if( arrayData[mid]<key){
            start = mid+1
            
        }
    }
  return -1

}
console.log(binaryFunction(binaryData,key2))