// const fetchData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        const data = "Some data is being fetched" ;
//        resolve(data)
//     }, 1000);
// })

// fetchData.then((data)=>{
//     console.log(`data fetched,${data}`)
// }).catch((err)=>{
// console.log(err)
// })

const fetched = () => {
    return new Promise ((resolve,reject)=>{
        fetch("http://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Error in response")
            }
        })
        .then(data=>{
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
        
    })
    
}
fetched().then(data => {
    console.log(data)
})
.catch(err=>{
    console.log(err)
})