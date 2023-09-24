import Todo from "./todo";

const TodoList = (todoData) => {
  const todosContainer = document.createElement("section");
  todosContainer.classList.add("todo-list");

  if (todoData.length === 0) {
    todosContainer.innerHTML = "NO DATA TO SHOW";
    return todosContainer;
  }

  todoData.forEach((element, index) => {
    let todoElement = Todo(element, index);
    todoElement.classList.add("todo-list__todos");

    todosContainer.appendChild(todoElement);
  });

  return todosContainer;
};

export default TodoList;
