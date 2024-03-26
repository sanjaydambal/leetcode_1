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

// const fetched = () => {
//     return new Promise ((resolve,reject)=>{
//         fetch("http://jsonplaceholder.typicode.com/users/1")
//         .then(response => {
//             if(response.ok){
//                 return response.json()
//             }else{
//                 throw new Error("Error in response")
//             }
//         })
//         .then(data=>{
//             resolve(data)
//         })
//         .catch(err => {
//             reject(err)
//         })
        
//     })
    
// }
// fetched().then(data => {
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

// function taskA(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Task A is executed")
//             resolve()
//         }, 1000);
//     })
// }

// function taskB(){
//     console.log("Task B is executed")
// }

// taskA().then(taskB)

function fetchNumber() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 10);
        if (randomNum >= 5) {
            resolve(randomNum);
        } else {
            reject(new Error("Failed to generate a number greater than or equal to 5")); 
        }
    });
}

fetchNumber()
    .then((num) => {
        console.log(`The number is ${num}`);
    })
    .catch((err) => {
        console.log(err.message); // Log the error message
    });
