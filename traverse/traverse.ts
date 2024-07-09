// in order travers 
function inOrder(array:number[], index:number):any {
    if(index>=array.length|| array[index]==null ){
        return 
    }
inOrder(array,2*index+1)// left
console.log(array[index])// root 
inOrder(array, 2*index+2)// right 

}
let inoderNumber:number[] = [1,2,3,4,5,6,7,8]
inOrder(inoderNumber,0);
// pre order 
function preOrder( array:number[], index:number):any{
    if(index>=array.length || array[index]==null){
        return
    }
    console.log(array[index])
    preOrder(array, 2*index+1)// left 
    preOrder(array, 2*index+2);

}
let preOrderData:number[] = [1,2,3,4,5,6,7,8,9]
preOrder(preOrderData,0);// in dsa or binary tree the preorder is  sorted data 
//  post order 
function postOrder( array:number[], index:number):any{
    if(index>=array.length || array[index]==null){
        return
    }
/// left right and root 
postOrder(array,2*index+1);
postOrder(array, 2*index+2);
console.log(array[index])
}
let postOrderData:number[] = [1,2,3,4,5,6,7,8,9]
console.log("post order data =>........")
postOrder(postOrderData, 0)