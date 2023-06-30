let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText.length === 0) {
    alert("Please enter a task");
    return;
  }

  let taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentNode.remove();
}
