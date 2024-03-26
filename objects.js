function GetName(fName,lName){
    this.fName = fName;
    this.lName = lName;
    this.getFulName =  function(){
        return `My firstname is ${this.fName} and last Name is ${this.lName} `
    }
}

let person1 = new GetName("Sanjay","Dambal")
console.log(person1.getFulName())