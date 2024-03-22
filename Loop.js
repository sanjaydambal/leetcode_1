// for(leti=1;i<=50;i++){
//     if(i/4==0){
//         console.log(i);
//     }
// }

let i=1;
while(i<=50){
    if(i/4===0){
        console.log(i)
    }
    i++
}

let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
}

arr.forEach((i)=>{
    console.log(i)
})

function Employee(name, id){
    this.name = name;
    this.id = id;
}
const emp1 = new Employee("Sanjay",1)
const emp2 = new Employee("Vinay",2)
const emp3 = new Employee("Vijay",3)
const emp4 = new Employee("Rahul", 4)
const emp5 = new Employee("Ajay", 5)
const employees = [emp1, emp2,emp3,emp4,emp5];

emp1.salary = 40000;
emp2.salary = 50000;
emp3.salary = 60000;
emp4.salary = 65000;
emp5.salary = 70000;
console.log(employees)
const filtered = employees.filter((i) => {
    return i.salary > 50000
})
console.log(filtered)




