// Define a variable to hold our list of tasks
let tasks = [];

// Get references to the HTML elements we need to manipulate
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Define a function to add a task to the list
function addTask() {
  // Get the task text from the input field
  const taskText = taskInput.value;
  
  // Add the task to the list of tasks
  tasks.push(taskText);
  
  // Clear the input field
  taskInput.value = "";
  
  // Update the task list display
  updateTaskList();
}

// Define a function to update the task list display
function updateTaskList() {
  // Clear the current list items
  taskList.innerHTML = "";
  
  // Loop through the list of tasks and add each one to the display
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    
    // Create a list item element for the task
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    
    // Add the task text to the list item
    listItem.innerText = task;
    
    // Add the list item to the task list
    taskList.appendChild(listItem);
  }
}
