const pairs = {
    "(":")",
    "[":"]",
    "{":"}"
 }
var isValid = function(s) {
    if(s.length % 2!== 0) return false;
    if(s[0] == ")" || s[0] == "]" || s[0] == "}") return false;
    if(s[s.length-1] == "(" || s[s.length-1] == "[" || s[s.length-1] == "{") return false;
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(pairs[s[i]]){
            stack.push(s[i]);
        }else{
            if(stack.length == 0) return false;
            let top = stack.pop();
            if(pairs[top]!== s[i]) return false;
        }
     
    }
    return stack.length == 0;
};
