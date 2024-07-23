document.addEventListener('DOMContentLoaded', () => {
    const taskOl = document.querySelector('#tasks');
    const taskInput = document.querySelector('#new-task');
    const addTaskButton = document.querySelector('#add-task');
    const taskTemplate = document.querySelector('#task-template');

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
        });

        taskOl.appendChild(taskTemplateClone);
    }

    function addTask(task) {
        const newTask = {
            id: Math.random().toString(16).slice(2),
            text: task
        };

        renderTask(newTask);
    }
});
