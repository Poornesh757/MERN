// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${taskText} <button class="remove-task-btn">Remove</button>`;
            taskList.appendChild(listItem);
            
            // Show animation
            requestAnimationFrame(() => {
                listItem.classList.add('show');
            });

            taskInput.value = '';
            taskInput.focus();

            const removeBtn = listItem.querySelector('.remove-task-btn');
            removeBtn.addEventListener('click', () => {
                listItem.classList.remove('show');
                listItem.addEventListener('transitionend', () => {
                    listItem.remove();
                });
            });
        }
    });
});
