// Step 1 

let todos = JSON.parse(localStorage.getItem('todos')) || []
let input = document.querySelector('input')
let addBtn = document.querySelector('.addIcon')
let todosContainer = document.querySelector('.todos')
let editId;

todos.length > 0 && renderTodos(todos)

function renderTodos(todos) {
    todosContainer.innerHTML = ""
    todos.forEach(todo => {
        let todoHtml = `<div class="todo">
        <div class="todoText">${todo.text}</div>
        <div class="todoActions">
          <span onclick={deleteTodo(${todo.id})} class="material-symbols-outlined delIcon icon"> delete </span>
          <span onclick={handleEdit(${todo.id})} class="material-symbols-outlined editIcon icon">
            edit_square
          </span>
        </div>
        </div>`
        todosContainer.innerHTML += todoHtml
    });
}

function handleEdit(id) {
    editId = id
    let myTodoToEdit = todos.filter(todo => todo.id === id)[0]
    input.value = myTodoToEdit.text;

    // change icon
    addBtn.innerText = 'check_circle'
}

function addTodo() {
    let inptVal = input.value;
    if (!inptVal) return
    input.value = ""

    // Creating single todo object
    let todo = {}

    todo.text = inptVal
    let unqId = new Date().getTime()
    todo.id = unqId

    // Pushing created todo object inside array of todos[] that is declared globally
    todos.push(todo)

    // updating/setting todos into localstorage..
    localStorage.setItem('todos', JSON.stringify(todos))

    // Rendering the todos...
    renderTodos(todos)
}

function updateTodo() {
    todos = todos.map(todo => {
        if (todo.id === editId) {
            todo.text = input.value
        }
        return todo
    })
    addBtn.innerText = 'add_circle'
    input.value = ""
    renderTodos(todos)
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos)
}

// Step 2
addBtn.addEventListener('click', () => {
    if (addBtn.innerText === 'add_circle') addTodo()
    else updateTodo()
})

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        if (addBtn.innerText === 'add_circle') addTodo()
        else updateTodo()
    }
})
