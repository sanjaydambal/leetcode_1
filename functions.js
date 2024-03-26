function sum(...numbers){
   return numbers.reduce((intial,total)=>intial+total,0)
}
console.log(sum(1,2,3,4,5))

function operationOnArr(arr,operation){
    let result = [];
    for(let ele of arr){
        result.push(operation(ele))
    }
    return result
}

function multiply(x){
    return x*2
}

let arr = [1,2,3,4,5,6]
let output = operationOnArr(arr,multiply)
console.log(output)

function f1(){
    const outer = "I am a outer function";
    function f2(){
        console.log(outer)
    }
    return f2
}
const out = f1();
out()

const fn1 = ()=>{
    const outer = "I am a outer function";
    const  fn2 =() =>{
        console.log(outer)
    }
    return fn2
}
const out2 = fn1();
out2()

let arr1 = [0, 1, 5, 8, 0, 7, 0, 9];


for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) {
        arr1.splice(i, 1);
        arr1.push(0); 
    }
}

console.log(arr1); 
const arr2 = arr1.sort((a,b)=> b-a)
console.log(arr2)

const arra = [5, -1, -1, 4, -1, -1, 3, -1, 2, -1, 1];
const nonNegative = arra.filter(i=> i !==-1).sort()
console.log(nonNegative)
let sortedIndex = 0;

for(let i=0;i<arra.length;i++){
    if(arra[i] !== -1){
        arra[i] = nonNegative[sortedIndex]
        sortedIndex++
    }
}
console.log(arra)

function bubbleSort(str){
    let charArr = str.split("")
    console.log(charArr)
    for(let i=0;i<charArr.length-1;i++){
        for(let j=0;j<charArr.length-i-1;j++){
            if(charArr[j]>charArr[j+1]){
                let temp = charArr[j];
                charArr[j] = charArr[j+1]
                charArr[j+1]= temp
            }
        }
    }
    return charArr.join("")
}
const sortedStr = bubbleSort("yajnas")
console.log(sortedStr)

let  nums = [0,0,1,1,1,2,2,3,3,4];
for(let i=0;i<nums.length-1;i++){
    for(let j=1;j<nums.length;j++){
        if(nums[i]=== nums[j]){
            nums.splice(i,1)
        }
    }
}
console.log(nums)


// let  nums1 = [0,0,1,1,1,2,2,3,3,4];
// let unique = {}
// for(let i=0;i<nums1.length;i++){
//  if(nums1.indexOf(nums1[i])===i){
//     unique.push(nums1[i])
//  }
// }
// console.log(unique)

let num = [1,2,1];
var getConcatenation = function(num) {
    let n = num.length;
    const ans = new Array (2*n);
    for(let i=0;i<n;i++){
     ans[i] = ans[i+n] = num[i]
    }
   
    return ans
 };
 const ans = getConcatenation(nums);
console.log(ans);

//Greedy problem Return the maximum amount of water a container can store.
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1
    let maxWater = 0
    while(left<right){
        let width = right-left
        let h = Math.min(height[left],height[right])
        let water = width*h;
        maxWater = Math.max(water,maxWater)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater
};