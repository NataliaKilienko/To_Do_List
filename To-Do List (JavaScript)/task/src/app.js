function updateLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        const span = document.createElement('span');
        span.className = 'task';
        span.textContent = task.name;
        if (task.completed) {
            span.style.textDecoration = 'line-through';
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        checkbox.addEventListener('change', function() {
            tasks[index].completed = checkbox.checked;
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
            updateLocalStorage(tasks);
        });

        deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            updateLocalStorage(tasks);
            renderTasks(tasks);
        });
    });
}

window.onload = function() {
    const tasks = getTasksFromLocalStorage();
    renderTasks(tasks);
};

document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('input-task');
    const taskValue = taskInput.value;

    if (taskValue) {
        const tasks = getTasksFromLocalStorage();
        tasks.push({ name: taskValue, completed: false });
        updateLocalStorage(tasks);
        renderTasks(tasks);
        taskInput.value = '';
    }
});
