document.addEventListener('DOMContentLoaded', () => {
    const taskOl = document.querySelector('#tasks');
    const taskInput = document.querySelector('#new-task');
    const addTaskButton = document.querySelector('#add-task');
    const taskTemplate = document.querySelector('#task-template');

    renderTasksFromLocalStorage();

    addTaskButton.addEventListener('click', () => {
        const newTask = taskInput.value;
        if (newTask) {
            addTask(newTask);
            taskInput.value = '';
        }
    });

    function renderTask(newTask) {
        const taskTemplateClone = taskTemplate.content.cloneNode(true);
        const newTaskElement = taskTemplateClone.querySelector('.task');
        const taskText = newTaskElement.querySelector('.task-text');
        const deleteButton = newTaskElement.querySelector('.delete-button');

        newTaskElement.id = newTask.id;
        taskText.textContent = newTask.text;

        deleteButton.addEventListener('click', () => {
            taskOl.removeChild(newTaskElement);
            removeTaskFromLocalStorage(newTask.id);
        });

        taskOl.appendChild(taskTemplateClone);
    }

    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasksFromLocalStorage() {
        taskOl.innerHTML = "";

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.forEach((task) => {
            renderTask(task);
        });
    }

    function addTask(task) {
        const newTask = {
            id: Math.random().toString(16).slice(2),
            text: task
        };

        renderTask(newTask);
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(newTask);
        saveTasksToLocalStorage(tasks);
    }

    function removeTaskFromLocalStorage(taskId) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage(tasks);
    }
});
