import Todo from './todo';

const TodoList = (todoData, options = { projectName: 'All' }) => {
  const todosContainer = document.createElement('section');
  todosContainer.classList.add('todo-list');

  if (options.duration != null) {
    todosContainer.style.animationDuration = options.duration;
  }

  if (options.projectName != null) {
    const todoListProject = document.createElement('h3');
    todoListProject.classList.add('todo-list__header');
    todoListProject.textContent = options.projectName;

    todosContainer.appendChild(todoListProject);
  }

  if (todoData.length === 0) {
    todosContainer.innerHTML = 'NO DATA TO SHOW';
    return todosContainer;
  }

  todoData.forEach((element, index) => {
    let duration = (index * 500) + 500;
    duration = (duration > 5000) ? 5000 : duration;

    const todoElement = Todo(element, index, {
      duration: `${[duration]}ms`,
    });
    todoElement.classList.add('todo-list__todos');

    todosContainer.appendChild(todoElement);
  });

  return todosContainer;
};

export default TodoList;
