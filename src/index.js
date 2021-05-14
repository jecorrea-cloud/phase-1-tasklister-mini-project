//Global variables
//Grabbing the form where user inputs data and the list where that data will be appended
let taskForm = document.querySelector("form#create-task-form"),
taskList = document.querySelector("ul#tasks");


//Calling an event on the form
taskForm.addEventListener("submit",(e)=>{
  //Preventing the page-reload default behavior of <form>
  e.preventDefault();
  
  //Grabbing the form's input text and assigning it to a variable
  let whatUserTyped = e.target['new-task-description'].value;

  //Invoking addElementToList() and passing our new value
  addElementToList(whatUserTyped);

  //This line cleans up whatever was type
   e.target.reset();
});


//addElementToList() creates a list node with a text param, adds a delete
// button and appends it to the global <ul>
function addElementToList(newTask){
  let liNode = document.createElement("LI")
  liNode.textContent = newTask
  taskList.append(liNode)
}