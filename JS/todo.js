const todoFrom = document.getElementById('todo-form');
const todoInput = todoFrom.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

// 여기를 데이터베이스라고 생각해야한다.
let toDos = [];

function saveTodos(event) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove();
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '\u{274C}';
    button.addEventListener('click', deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos()
}

todoFrom.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

// localStorge가 비어있는 경우 getItem을 하면 null을 처음에 받아와 버린다.
// 이러한 경우가 생기지 않게 코드를 짜야한다.
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo)
}
