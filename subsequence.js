let str = "sanjay";
let index = 0;
let str2 = "";
generateSubsequence(str, index, str2);
function generateSubsequence(str, index, str2){
    if(str2.length !== 0){
        console.log(str2);
    }
    
    if(index === str.length){
        return;
    }
    for(let i = index; i < str.length; i++){
        str2 += str[i];
        generateSubsequence(str, i+1, str2);
        str2 = str2.substring(0, str2.length-1);

    }
}