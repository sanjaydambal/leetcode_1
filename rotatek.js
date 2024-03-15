const reversedArray = (arr,start,end) => {
    while(start <end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
}

const rotateK = (arr,k) => {
    k = k%arr.length;
    reversedArray(arr,0,arr.length-1);
    reversedArray(arr,0,k-1);
    reversedArray(arr,k,arr.length-1);
    return arr;

}

const arr = [1, 2, 3, 4, 5];
const k = 4;
rotateK(arr, k);
console.log(arr);