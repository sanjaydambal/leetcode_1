let arr = [1,2,4,5];
let missing = []
let n = 15
for(let i=1;i<=n;i++){
    
        if(!arr.includes(i)){
            missing.push(i)
        }

   
}

console.log(missing)

