

function preventForm(){
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    document.querySelector("input").innerHTML += "<ul>preventDefault()</ul>;
    event.preventDefault();
  }
}
  

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  preventForm();
});
