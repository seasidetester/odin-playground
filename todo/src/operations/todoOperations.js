import { getStorage } from './storageOperations';

/**
 *
 * @param { Todo } data => A Todo object to be added to LocalStorage
 * @returns A Promise Object
 */
const addTodo = (data) => new Promise((resolve, reject) => {
  if (typeof data !== 'object') {
    reject(new Error('Data must be an Object'));
    return;
  }

  if (data.constructor.name !== 'Todo') {
    reject(new Error('Must be type of Todo'));
    return;
  }

  const updatedData = data.todoDetails;

  localStorage.setItem(
    `${updatedData.project}-${localStorage.length}`,
    JSON.stringify(updatedData),
  );

  resolve('Item has been added!');
});

/**
 *
 * @param {string || array} dataIndex
 * @returns Promise
 */
const deleteTodo = (dataIndex) => new Promise((resolve, reject) => {
  if (typeof dataIndex === 'number') reject(new Error('Index should indicate the Project Name'));

  switch (Array.isArray(dataIndex)) {
    case false:
      localStorage.removeItem(dataIndex);
      break;
    case true:
      dataIndex.forEach((element) => {
        localStorage.removeItem(element);
      });
      break;
    default:
      reject(new Error('Index must compose of the Project Name and Index'));
      break;
  }
  const currentData = getStorage();

  if (currentData.length === 0) {
    reject(new Error('Data is now empty'));
  }

  resolve('Todo successfully deleted');
});

const editTodo = (dataIndex, updatedData) => {
  const processedData = JSON.stringify(updatedData);

  localStorage.setItem(dataIndex, processedData);
};

const formatTodoPriority = (todoPriority) => {
  if (todoPriority === null) return new Error('Value must not be Null');

  let formattedPriority;

  switch (todoPriority) {
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
      formattedPriority = 'Unknown Value';
  }

  return formattedPriority;
};

export {
  addTodo, deleteTodo, editTodo, formatTodoPriority,
};
