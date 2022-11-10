let button=document.getElementById("btn")

let add=()=>{
    let first=document.getElementById("name").value
    console.log(first)
let  last=document.querySelector(".last").value
let address=document.querySelector(".address").value
let gender=document.querySelector(".gender").value
let food=document.querySelector(".food").value
let body=document.querySelector(".output")
    let data=""
    data+=
    `<tr>
    <td>${first}</td>
    <td>${last}</td>
    <td>${address}</td>
    <td>${gender}</td>
    <td>${food}</td></tr>
    `
    console.log(data)

body.innerHTML=data
document.getElementById("name").value=""
    
document.querySelector(".last").value=""
document.querySelector(".address").value=""
document.querySelector(".food").value=""

  
}
//

