let a = "sanjay";
let b = "";

for(let i=0;i<a.length;i++){
    if(a[i] >= "a" && a[i]<= "z"){
        b += String.fromCharCode(a[i].charCodeAt(0)-32)
    }else{
        b+=a[i]
    }
}
console.log(b)


