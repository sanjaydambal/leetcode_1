
// //callback function
// asyncFunction1(function(res1){
//     asyncFunction2(res1,function(res2){
//         asyncFunction3(res2,function(res3){
//             console.log(res3)
//         })
//     })
// })

// //promise
// asyncFunction1()
// .then((res1)=> asyncFunction2(res1))
// .then((res2) => asyncFunction3(res2))
// .then((res3)=>console.log(res3))
// .catch((err) => console.log(err))

// // async-await
//  async function myAsyncFunction(){
//     try{
//     const res1 = await asyncFunction1();
//     const res2 = await asyncFunction2(res1);
//     const res3 = await asyncFunction3(res2)

// }catch(err){
// console.log(err)
// }
//  }
 

const fetchData = (cb) => {
    fetch("http://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Error in fetching data")
        }
    })
    .then(data => {
        cb(data)
    })
    .catch(err=>{
        cb(err)
    })
}

fetchData(data=>{
    console.log(data)
})

fetchData(err=>{
    console.log(err)
})