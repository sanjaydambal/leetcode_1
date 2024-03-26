//  Ajax is nothing but Asynchronous JavaScript And XML, it is web development technique to send and recieve data from webserver
// without need of loading complete page 
let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.example.com/data',true)
xhr.send();
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let response = JSON.parse(xhr.responseText)
        console.log(response)
    }else{
        console.log(error)
    }
}