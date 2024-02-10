const inputField = document.getElementById('input-field');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksList = document.querySelector('.tasks-list');
const emptyField = document.querySelector('.empty-field');

addTaskBtn.addEventListener('click', addTask);

inputField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    if (inputField.value === '') {
        emptyField.innerText = 'Digite uma tarefa para poder adicionar!';
        emptyField.classList.remove('hidden');
    } else {
        emptyField.classList.add('hidden');

        let task = document.createElement('div');
        task.classList.add('task');
    
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
        checkBtn.classList.add('checkBtn');
        task.appendChild(checkBtn);
    
        let taskContent = document.createElement('span');
        taskContent.innerText = inputField.value;
        taskContent.classList.add('taskContent');
        task.appendChild(taskContent);
    
        let deleteTask = document.createElement('i');
        deleteTask.classList.add('fa-solid', 'fa-trash', 'deleteTask');
        task.appendChild(deleteTask);
        
        tasksList.appendChild(task);
        inputField.value = '';
    
        checkBtn.addEventListener('click', function() {
            emptyField.classList.add('hidden');

            checkBtn.classList.toggle('checked');
            taskContent.classList.toggle('task-checked');
        });
    
        deleteTask.addEventListener('click', function(e) {
            emptyField.classList.add('hidden');

            e.target.parentElement.remove();
        });
        
    }
}
