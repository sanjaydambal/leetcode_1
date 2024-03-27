var lengthOfLongestSubstring = function (string) {
    var max = 0, current_string = "", i, char, pos;

    for (let i = 0; i < string.length; i++) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        console.log("char:", char, "pos:", pos, "current_string:", current_string);
        if (pos !== -1) {
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
};

lengthOfLongestSubstring("abcabcbb");

