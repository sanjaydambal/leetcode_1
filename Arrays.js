let targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
let newDisk = targetDisk.filter(char => char !== 'ø');
// console.log(newDisk.join(""));

const arr = ["fr", "fr", "fr"];
let prefix = "";

// Iterate over the characters of the first word in the array
for (let i = 0; i < arr[0].length; i++) {
    // Iterate over the words in the array starting from the second one
    for (let j = 1; j < arr.length; j++) {
        // Check if the character at the same position in other words is different
        if (arr[0][i] !== arr[j][i]) {
            // If it's different, the common prefix ends here
            console.log(prefix);
            return;
        }
    }
    // If all words have the same character at this position, append it to the prefix
    prefix += arr[0][i];
}
console.log("test")
console.log(prefix); // Output: "fr"
