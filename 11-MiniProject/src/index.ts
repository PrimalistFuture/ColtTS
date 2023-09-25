// This file is a mess because it is part lesson part mini app. Sorry future me!

// JS AND TS null issue

// Mouse over btn to see that TS knows it is of type HTMLElement or null. TS predefined what a HTMLElement is.
// const btn = document.getElementById('btn');
// TS would be mad because btn might be null, in which case it wouldn't have a method called addEventListener
// btn.addEventListener('click', function ());
// TS is not mad, and wouldn't be mad even if btn evaluated to null.
// This is not TS syntax, it is plain old javascript
// btn?.addEventListener('click', function() {
//   alert('Clicked');
// });

// Another solution to this problem
// The ! tells TS to not worry because we promise that btn2 will not evaluate to null.
const btn = document.getElementById('btn')!
// btn.addEventListener('click', function() {
//   alert('Clicked');
// });


// Type assertion

// let mystery: unknown = "Hello World!";
// TS mad because it doesn't think mystery has a length
// const numChars = mystery.length
// So I tell TS that I know mystery is a string, and thus has a .length
// const numChars = (mystery as string).length;

// TS will infer the type of HTMLElement
// const input = document.getElementById('todoinput')!;
// Which is a problem because it thinks that input doesn't have a value property, which is true. input is actually an HTMLInputElement
// input.value
// But we know a more specific type, so let's assert it
const input = document.getElementById('todoinput')! as HTMLInputElement;

// btn.addEventListener('click', function () {
//   alert(input.value);
//   input.value = '';
// })

// remember that querySelector can also take in an element type or an id or class
const form = document.querySelector('form')!;
// TS is smart, it knows we are writing an anon function in an eventListener with submit, and it doesn't need to be told what e is, it knows it s a submitEvent.
// If we had writtin this function outside as a named function, it would not know that, and we would have to provide it
const list = document.querySelector('#todolist')!;

interface Todo {
  text: string,
  completed: boolean
}
const todos: Todo[] = readTodos();
// calls createTodo for each element in the todos
todos.forEach(createTodo);

// If there are todos in localStorage, returns them parsed
// otherwise return an empty array
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos")
  if (todosJSON === null) {
    return [];
  }
  return JSON.parse(todosJSON);
}
// Updates localStorage with the todos array
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Upon submission, creates an new object of type Todo, and adds that to the todo array in memory. Then calls createTodo, saveTodos and resets input text.
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false
  }
  todos.push(newTodo);
  createTodo(newTodo);

  saveTodos();
  input.value = '';
}
// Creates a todo to display on page, checks the box if the todo.completed is true
function createTodo(todo: Todo) {
  const newLI = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function() {
    todo.completed = checkbox.checked;
    saveTodos();
  })
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener('submit', handleSubmit);
