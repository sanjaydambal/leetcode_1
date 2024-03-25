const fetchData = new Promise((resolve,reject)=>{
    setTimeout(() => {
       const data = "Some data is being fetched" ;
       resolve(data)
    }, 1000);
})

fetchData.then((data)=>{
    console.log(`data fetched,${data}`)
}).catch((err)=>{
console.log(err)
})