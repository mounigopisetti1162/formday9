let button=document.getElementById("btn")

function changeresult()
{
   
  }
  let data=""
let add=()=>{
    let first=document.querySelector(".name").value
    console.log(first)
let  last=document.querySelector(".last").value
let address=document.querySelector(".address").value
let gender=document.querySelector(".gender").value
var food=document.querySelector(".food").value;

let body=document.querySelector(".output")
   
    data=data+
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
document.getElementById(".food").innerHTML = food;

  
}
//

