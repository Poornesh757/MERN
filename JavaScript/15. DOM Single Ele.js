//Single Element Selector 
//Document.getElementById

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);


//change style 

const taskTitle=document.getElementById("task-title");
taskTitle.style.backgroundColor="black";
taskTitle.style.color="white";
taskTitle.style.padding="10px";

// textcontent changes   

taskTitle.textContent="New Production Planning";
//or
taskTitle.innerHTML="New Production Planning";
taskTitle.innerHTML="<span style='color:white'>Tast List</span>";

//document Query Selector 

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h2"));


document.querySelector("li").style.color="red";
document.querySelector("li:last-child").style.color="blue";  
document.querySelector("li:nth-child(2)").style.color="orange";
