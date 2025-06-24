let tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [];
function saveTasks() {
  localStorage.setItem('todo_tasks', JSON.stringify(tasks));
}
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      const updated = prompt("Edit task:", task);
      if (updated !== null && updated.trim() !== "") {
        tasks[index] = updated.trim();
        saveTasks();
        renderTasks();
    }};

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    saveTasks();
    renderTasks();
  }
}
function clearTasks() {
  tasks = [];
  saveTasks();
  renderTasks();
}

renderTasks();
