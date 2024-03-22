const input = "bbccddefbbaa";

let charArray = [];
for(let i=0; i<input.length; i++) {
    charArray.push(input[i]);
}
console.log(charArray);

for(let i=0; i<charArray.length-1; i++) {
    for(let j=0; j<charArray.length-i-1; j++) {
        if(charArray[j] > charArray[j+1]) {
            let temp = charArray[j];
            charArray[j] = charArray[j+1];
            charArray[j+1] = temp;
        }
    }
}

console.log(charArray);
let sorted = "";
for(let char of charArray) {
    sorted += char;
}
console.log(sorted)