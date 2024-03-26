// async function fetchData() {
//     try {
//         const response = await fetch("http://example.com");

//         // Check if response is successful (status code in the range 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (err) {
//         throw err;
//     }
// }

// fetchData()
//     .then(resolvedData => {
//         console.log(resolvedData);
//     })
//     .catch(err => {
//         console.error(err);
//     });

//     const fetched = async () => {
//         try{
//             const response = await fetch("http://jsonplaceholder.typicode.com/users/1")
//             const data = await response.json();
//             console.log(data)
//         }catch(err){
// console.log(err)
//         }
//     }
// fetched()

async function taskA(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task A is executed")
            resolve()
        },1000)
    })
}
function taskB(){
console.log("Task B is executed")
}

taskA().then(taskB)