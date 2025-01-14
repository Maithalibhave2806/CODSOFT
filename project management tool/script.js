// script.js

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim()) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        //create task deletion
        const deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = 'Delete';
         deleteBtn.addEventListener('click', function()
          { taskList.removeChild(taskItem);

           }); 
         taskItem.appendChild(taskText); 
         taskItem.appendChild(deleteBtn); 
         taskList.appendChild(taskItem); 
         taskInput.value = ''; 
        }
});
