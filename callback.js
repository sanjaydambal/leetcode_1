
//callback function
asyncFunction1(function(res1){
    asyncFunction2(res1,function(res2){
        asyncFunction3(res2,function(res3){
            console.log(res3)
        })
    })
})

//promise
asyncFunction1()
.then((res1)=> asyncFunction2(res1))
.then((res2) => asyncFunction3(res2))
.then((res3)=>console.log(res3))
.catch((err) => console.log(err))

// async-await
 async function myAsyncFunction(){
    try{
    const res1 = await asyncFunction1();
    const res2 = await asyncFunction2(res1);
    const res3 = await asyncFunction3(res2)

}catch(err){
console.log(err)
}
 }
 

