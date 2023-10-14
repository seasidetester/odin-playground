import { formatDistance } from 'date-fns';
import Trash from '../assets/trash.png';
import Edit from '../assets/pencil.png';

const Todo = (
  {
    project, title, priority, isComplete, description, dueDate,
  },
  index,
  options = {},
) => {
  const todo = document.createElement('div');
  todo.classList.add('todo');
  todo.dataset.order = index;
  todo.setAttribute('id', `${project}-${index}`);

  if (options.duration != null) {
    todo.style.animationDuration = options.duration;
  }

  const todoTitleContainer = document.createElement('div');
  todoTitleContainer.classList.add('todo__title');

  const todoTitle = document.createElement('h4');
  todoTitle.classList.add('todo__title-header');
  todoTitle.textContent = title;

  let formattedPriority;

  switch (priority) {
    case 0:
      formattedPriority = 'Low';
      break;
    case 1:
      formattedPriority = 'Normal';
      break;
    case 2:
      formattedPriority = 'High';
      break;
    default:
      formattedPriority = "Unknown Value";
    
  }

  const todoPriority = document.createElement('span');
  todoPriority.classList.add('todo__title-priority');
  todoPriority.textContent = formattedPriority;

  const todoComplete = document.createElement('p');
  todoComplete.classList.add('todo__title-status');
  todoComplete.textContent = isComplete ? 'Complete' : 'Incomplete';

  todoTitleContainer.append(todoTitle, todoPriority, todoComplete);

  const todoContentContainer = document.createElement('div');
  todoContentContainer.classList.add('todo__content');

  const todoDescription = document.createElement('p');
  todoDescription.classList.add('todo__content-description');
  todoDescription.textContent = description;

  todoContentContainer.append(todoDescription);

  todo.append(todoTitleContainer, todoContentContainer);

  const actionsContainer = document.createElement('div');
  actionsContainer.classList.add('todo__actions');

  const deleteButton = new Image(16);
  deleteButton.src = Trash;
  deleteButton.classList.add('todo__actions-delete');

  const editButton = new Image(16);
  editButton.src = Edit;
  editButton.classList.add('todo__actions-edit');

  const formattedDueDate = parseInt(dueDate, 10);

  const todoDueDate = document.createElement('p');
  todoDueDate.classList.add('todo__actions-duedate');
  todoDueDate.textContent = formatDistance(formattedDueDate, new Date(), {
    addSuffix: true,
  });

  actionsContainer.append(deleteButton, editButton, todoDueDate);

  todo.appendChild(actionsContainer);

  return todo;
};

export default Todo;
