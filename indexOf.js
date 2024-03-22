let array = [1, 2, 3, 4, 5, 6];
let x = 4;
function findIndex(array,x){
for(let i=0;i<array.length;i++){
    if(array[i] === x){
        return i
    }
}
return -1
}

let index = findIndex(array,x);
if(index !== -1){
    console.log(`The index of ${x} is ${index}`);
} else {
  console.log(`${x} is not present in the array`);
}