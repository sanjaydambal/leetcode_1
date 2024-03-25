let unique = {};

function distinct(char) {
    for (let i = 0; i < char.length; i++) {
        unique[char[i]] = true;
    }
}

let char = "calcullator";
distinct(char); 

let count = Object.keys(unique).length;
console.log(count); 
