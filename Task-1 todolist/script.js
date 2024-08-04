document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        if (taskInput.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskInput.value}
            <span class="delete">❌</span>
        `;

        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});