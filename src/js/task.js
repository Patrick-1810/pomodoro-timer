const taskOl = document.querySelector('#tasks');
const taskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');
const taskTemplate = document.querySelector('#tasj-template');

addTaskButton.addEventListener('click', () =>{
    const newTask = taskInput.value;

    addTaskButton(newTask);
});

function addTask(task){
      const newTask = {
        id : Math.random().toString(16).slice(2),
        text : task
      }

}