document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() !== '') {
        addTodoItem(todoInput);
        document.getElementById('todoInput').value = '';
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = todoText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}