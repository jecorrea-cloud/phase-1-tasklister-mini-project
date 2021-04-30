let createTask = document.getElementById('Create-Task-Form');

function preventForm(){
  createTask.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  preventForm();
});
